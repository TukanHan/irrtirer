import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, signal, ViewChild, WritableSignal } from '@angular/core';
import { ActiveCanvasComponent } from '../../shared/active-canvas/active-canvas.component';
import { MosaicConfig, SectorSchema } from '../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { selectMosaicConfig, selectSectors, selectTilesSets } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { GridObject } from '../../shared/active-canvas/canvas-objects/grid-object';
import { Size } from '../../core/models/size.interface';
import { ImageObject } from '../../shared/active-canvas/canvas-objects/image-object';
import { Vector } from '../../core/models/vector.model';
import { TriangulatedContourObject } from '../../shared/active-canvas/canvas-objects/triangulated-contour-object';
import { SectorTriangulationMeshPartsModel, TileRequestModel } from '../../core/models/api.models';
import { CanvasObject } from '../../shared/active-canvas/models/canvas-object.interface';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TileObject } from '../../shared/active-canvas/canvas-objects/tile-object';
import { Tile } from '../../shared/mosaic-generator/models/tile';
import { MosaicSetModel } from '../../shared/mosaic-generator/sectors/mosaic-set.model';
import { ImageHelper } from '../../core/helpers/image-helper';
import { TileTransform } from '../../shared/mosaic-generator/models/tile-transform.model';
import { MatButtonModule } from '@angular/material/button';
import { MosaicSignalRService } from './mosaic-signal-r.service';
import { ColorHelper } from '../../core/helpers/color-helper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MosaicGenerationService } from './mosaic-generation.service';

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

    isLoadingSignal: WritableSignal<boolean> = signal<boolean>(false);

    private meshWorker: Worker = new Worker(new URL('./mesh.worker', import.meta.url));

    protected isImageVisibleSignal: WritableSignal<boolean> = signal<boolean>(true);

    protected isMeshVisibleSignal: WritableSignal<boolean> = signal<boolean>(true);

    private showMesh$: BehaviorSubject<boolean> = new BehaviorSubject(true);

    private imageCanvasObject: ImageObject;

    private avalibleTiles: Tile[];

    private subscription: Subscription = new Subscription();

    constructor(
        private store: Store,
        private service: MosaicGenerationService,
        private signalRService: MosaicSignalRService,
        private snackbarService: MatSnackBar
    ) {}

    async ngAfterViewInit(): Promise<void> {
        const mosaicConfig: MosaicConfig = this.store.selectSignal(selectMosaicConfig)();
        const image = await ImageHelper.getImageObjectBySrc(mosaicConfig.base64Image);

        this.activeCanvas.addCanvasObject(new GridObject());

        const mosaicSize: Size = {
            height: (image.height / image.width) * mosaicConfig.mosaicWidth,
            width: mosaicConfig.mosaicWidth,
        };

        this.imageCanvasObject = new ImageObject(image, Vector.zero, mosaicSize);
        this.activeCanvas.addCanvasObject(this.imageCanvasObject);

        this.setInitZoomForImage(mosaicSize);
        this.activeCanvas.rewrite();

        this.subscribeOnGenerationProgress();
        this.subscribeOnSectorsMeshRecived();

        this.initGeneration(mosaicConfig.base64Image, mosaicSize);

        this.isLoadingSignal.set(true);
    }

    private initGeneration(base64Image: string, imageSize: Size,): void {
        this.signalRService
            .startConnection()
            .then(() => {
                const sectorsSchemas: SectorSchema[] = this.store.selectSignal(selectSectors)();

                const initMosaicGenerationRequest = this.service.buildInitMosaicRequest(
                    base64Image,
                    imageSize,
                    sectorsSchemas
                );

                this.avalibleTiles = this.getAvalibleTiles();

                this.signalRService
                    .initMosaicTriangulation(initMosaicGenerationRequest)
                    .catch(() => this.showWarning($localize`Wystąpił błąd na etapie generowania siatki sektorów.`));
            })
            .catch(() => this.showWarning($localize`Wystąpił błąd na etapie połączenia z serwerem.`));
    }

    private subscribeOnGenerationProgress(): void {
        this.subscription.add(
            this.signalRService.sectionGenerated$.subscribe((sectorTiles) => {
                for (const tileTransform of sectorTiles) {
                    const tile = this.avalibleTiles.find((t) => t.id === tileTransform.tileId);
                    const x = new TileTransform(tile, tileTransform.position, tileTransform.angle);
                    this.activeCanvas.addCanvasObject(new TileObject(x.getWorldVertices(), tile.color));
                }

                this.activeCanvas.rewrite();
            })
        );
    }
    
    private subscribeOnSectorsMeshRecived(): void {
        this.subscription.add(
            this.signalRService.sectionsMeshReceived$.subscribe((sectorsTriangulations: SectorTriangulationMeshPartsModel[]) => {
                const sectorsSchemas: SectorSchema[] = this.store.selectSignal(selectSectors)();
                this.runGeneration(sectorsTriangulations, sectorsSchemas);

                const tiles: TileRequestModel[] = this.avalibleTiles.map((x) => ({
                    color: ColorHelper.rgbToHex(x.color),
                    id: x.id,
                    vertices: x.vertices,
                }));

                this.signalRService.startLongRunningTask(tiles);
            })
        );
    }

    ngOnDestroy(): void {
        this.meshWorker.terminate();
        this.signalRService.stopConnection();
        this.subscription.unsubscribe();
    }

    private setInitZoomForImage(imageSize: Size): void {
        const imageZoom: Size = {
            height: (imageSize.height * 1.1) / this.activeCanvas.viewport.cmSize.height,
            width: (imageSize.width * 1.1) / this.activeCanvas.viewport.cmSize.width,
        };

        const zoom: number = Math.max(imageZoom.height, imageZoom.width);
        this.activeCanvas.setZoom(zoom);
    }

    private runGeneration(sectorsTriangulations: SectorTriangulationMeshPartsModel[], sectorsSchemas: SectorSchema[]): void {
        this.meshWorker.onmessage = async ({ data }) => {
            const mosaicSet: MosaicSetModel = MosaicSetModel.deserialize(data);
            this.createSectorsMeshCanvasObjects(mosaicSet, sectorsSchemas);
            this.isLoadingSignal.set(false);
        };

        this.meshWorker.postMessage({ sectors: sectorsSchemas, sectorsTriangulations });
    }

    private createSectorsMeshCanvasObjects(mosaicSet: MosaicSetModel, sectors: SectorSchema[]): void {
        for (const [index, sector] of mosaicSet.sectors.entries()) {
            const sectorSchema: SectorSchema = sectors.find((s) => s.id === sector.id);
            const canvasObject = new TriangulatedContourObject(
                sector.sections.map((x) => x.triangle),
                sector.contour,
                sectorSchema.color,
                10 + index
            );

            this.canvasObjects.push(canvasObject);
        }

        this.subscription.add(
            this.showMesh$.subscribe(value => {
                this.canvasObjects.forEach(x => x.isVisible = value)
                this.activeCanvas.rewrite();
            })
        );

        for (const elem of this.canvasObjects) {
            this.activeCanvas.addCanvasObject(elem);
        }

        this.activeCanvas.rewrite();
    }

    private getAvalibleTiles(): Tile[] {
        const tilesSets = this.store.selectSignal(selectTilesSets)();
        return tilesSets.flatMap((x) => x.tiles).map((tile) => new Tile(tile));
    }

    onMeshVisibilityChange(isVisible: boolean): void {
        this.showMesh$.next(isVisible);
        this.isMeshVisibleSignal.set(isVisible);
    }

    onImageVisibilityChange(isVisible: boolean): void {
        this.imageCanvasObject.isVisible = isVisible;
        this.activeCanvas.rewrite();
        this.isImageVisibleSignal.set(isVisible);
    }

    private showWarning(message: string): void {
        this.snackbarService.open(message, 'Ok', { duration: 3000 });
    }
}
