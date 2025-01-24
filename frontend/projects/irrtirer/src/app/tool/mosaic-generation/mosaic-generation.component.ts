import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, ViewChild } from '@angular/core';
import { ActiveCanvasComponent } from '../../shared/active-canvas/active-canvas.component';
import { MosaicConfig, SectorSchema } from '../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { selectMosaicConfig, selectSectors, selectTilesSets } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { GridObject } from '../../shared/active-canvas/canvas-objects/grid-object';
import { Size } from '../../core/models/size.interface';
import { ImageObject } from '../../shared/active-canvas/canvas-objects/image-object';
import { Vector } from '../../core/models/vector.model';
import { TriangulatedContourObject } from '../../shared/active-canvas/canvas-objects/triangulated-contour-object';
import { DataService } from '../../core/services/data.service';
import { SectorTriangulationMeshPartsModel } from '../../core/models/api.models';
import { CanvasObject } from '../../shared/active-canvas/models/canvas-object.interface';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BehaviorSubject, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TileObject } from '../../shared/active-canvas/canvas-objects/tile-object';
import { Tile } from '../../shared/mosaic-generator/models/tile';
import { TileTray } from '../../shared/mosaic-generator/tray/tile-tray';
import { MosaicSetModel } from '../../shared/mosaic-generator/sectors/mosaic-set.model';
import { HtmlImageObject } from '../../shared/mosaic-generator/color-compatibility/html-image-object.model';
import { ImageHelper } from '../../core/helpers/image-helper';
import { Rect } from '../../core/models/rect.model';
import { TileTransform } from '../../shared/mosaic-generator/models/tile-transform.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-mosaic-generation',
    standalone: true,
    imports: [ActiveCanvasComponent, MatProgressSpinnerModule, CommonModule, MatButtonModule],
    templateUrl: './mosaic-generation.component.html',
    styleUrl: './mosaic-generation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MosaicGenerationComponent implements AfterViewInit, OnDestroy {
    @ViewChild('activeCanvas')
    activeCanvas: ActiveCanvasComponent;

    canvasObjects: CanvasObject[] = [];

    isLoading$: Subject<boolean> = new BehaviorSubject(false);

    private htmlImageObject: HtmlImageObject;

    private meshWorker: Worker = new Worker(new URL('./mesh.worker', import.meta.url));

    private mosaicGenerationWorker: Worker = new Worker(new URL('../../shared/mosaic-generator/mosaic-generator.worker', import.meta.url));

    isImageCanvasObjectVisible$: Subject<boolean> = new BehaviorSubject(true);

    private imageCanvasObject: ImageObject;

    constructor(private store: Store, private dataService: DataService) {}

    async ngAfterViewInit(): Promise<void> {
        const mosaicConfig: MosaicConfig = this.store.selectSignal(selectMosaicConfig)();
        const image = await ImageHelper.getImageObjectBySrc(mosaicConfig.base64Image);

        this.activeCanvas.addCanvasObject(new GridObject());

        const imageSize: Size = {
            height: (image.height / image.width) * mosaicConfig.mosaicWidth,
            width: mosaicConfig.mosaicWidth,
        };

        this.imageCanvasObject = new ImageObject(image, Vector.zero, imageSize);
        this.activeCanvas.addCanvasObject(this.imageCanvasObject);

        this.setInitZoomForImage(imageSize);
        this.activeCanvas.rewrite();
        this.requestSectorsTriangulationMesh();

        this.htmlImageObject = this.prepareImageObject(image, imageSize);
    }

    ngOnDestroy(): void {
        this.meshWorker.terminate();
        this.mosaicGenerationWorker.terminate();
    }

    private setInitZoomForImage(imageSize: Size): void {
        const imageZoom: Size = {
            height: (imageSize.height * 1.1) / this.activeCanvas.viewport.cmSize.height,
            width: (imageSize.width * 1.1) / this.activeCanvas.viewport.cmSize.width,
        };

        const zoom: number = Math.max(imageZoom.height, imageZoom.width);
        this.activeCanvas.setZoom(zoom);
    }

    private requestSectorsTriangulationMesh(): void {
        const sectorsSchemas: SectorSchema[] = this.store.selectSignal(selectSectors)();

        const sectorTriangulationRequest = sectorsSchemas.map((sector) => ({
            polygonVertices: sector.vertices,
            sectionMaxArea: sector.properties.sectionMaxArea,
            sectionMinAngle: sector.properties.sectionMinAngle,
        }));

        this.isLoading$.next(true);
        this.dataService
            .getMosaicTriangulationMesh(sectorTriangulationRequest)
            .subscribe((sectorsTriangulations: SectorTriangulationMeshPartsModel[]) => this.runGeneration(sectorsTriangulations, sectorsSchemas));
    }

    private runGeneration(sectorsTriangulations: SectorTriangulationMeshPartsModel[], sectorsSchemas: SectorSchema[]): void {
        this.meshWorker.onmessage = async ({ data }) => {
            const mosaicSet: MosaicSetModel = MosaicSetModel.deserialize(data);
            this.createSectorsMeshCanvasObjects(mosaicSet, sectorsSchemas);
            this.runMosaicGeneration(mosaicSet);
            this.isLoading$.next(false);
        };

        this.meshWorker.postMessage({ sectors: sectorsSchemas, sectorsTriangulations });
    }

    private runMosaicGeneration(mosaicSet: MosaicSetModel): void {
        this.mosaicGenerationWorker.onmessage = async ({ data }) => {
            data.tiles.forEach((tile) => {
                Object.setPrototypeOf(tile, TileTransform.prototype);
                this.addTile(tile);
            });
        };

        this.mosaicGenerationWorker.postMessage({
            imageObject: this.htmlImageObject,
            mosaicSet: MosaicSetModel.serialize(mosaicSet),
            tileTray: this.getTileTray(),
        });
    }

    private createSectorsMeshCanvasObjects(mosaicSet: MosaicSetModel, sectors: SectorSchema[]): void {
        for (const [index, sector] of mosaicSet.sectors.entries()) {
            const sectorSchema: SectorSchema = sectors.find((s) => s.id === sector.id);
            this.canvasObjects.push(
                new TriangulatedContourObject(
                    sector.sections.map((x) => x.triangle),
                    sectorSchema.color,
                    10 + index
                )
            );
        }

        for (const elem of this.canvasObjects) {
            this.activeCanvas.addCanvasObject(elem);
        }

        this.activeCanvas.rewrite();
    }

    private prepareImageObject(image: HTMLImageElement, imageSize: Size): HtmlImageObject {
        const imageOnCanvas = ImageHelper.getImageOnCanvas(image);
        const context = imageOnCanvas.getContext('2d');
        const canvasColorArray = context.getImageData(0, 0, imageOnCanvas.width, imageOnCanvas.height).data;
        const colorsArray = ImageHelper.normalizeCanvasColorAttay(canvasColorArray);
        const textureSize: Size = { width: imageOnCanvas.width, height: imageOnCanvas.height };
        const imageRect: Rect = {
            width: imageSize.width,
            height: imageSize.height,
            x: -imageSize.width / 2,
            y: -imageSize.height / 2,
        };

        return new HtmlImageObject(colorsArray, imageRect, textureSize);
    }

    private getTileTray(): TileTray {
        const tilesSets = this.store.selectSignal(selectTilesSets)();
        const avalibleTiles: Tile[] = tilesSets.flatMap((x) => x.tiles).map((tile) => new Tile(tile));
        return new TileTray(avalibleTiles);
    }

    private addTile(tileTransform: TileTransform): void {
        this.activeCanvas.addCanvasObject(new TileObject(tileTransform.getWorldVertices(), tileTransform.tile.color));
        this.activeCanvas.rewrite();
    }

    onMeshVisibilityChange(): void {

    }

    onImageVisibilityChange(isVisible: boolean): void {
        if(isVisible) {
            this.activeCanvas.addCanvasObject(this.imageCanvasObject);
        } else {
            this.activeCanvas.removeCanvasObject(this.imageCanvasObject);
        }
        this.activeCanvas.rewrite();

        this.isImageCanvasObjectVisible$.next(isVisible);
    }
}
