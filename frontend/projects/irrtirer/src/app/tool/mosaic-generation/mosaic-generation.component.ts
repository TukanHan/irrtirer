import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActiveCanvasComponent } from '../../shared/active-canvas/active-canvas.component';
import { MosaicConfig, Sector } from '../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { selectMosaicConfig, selectSectors } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { GridObject } from '../../shared/active-canvas/canvas-objects/grid-object';
import { Size } from '../../core/models/size.interface';
import { ImageObject } from '../../shared/active-canvas/canvas-objects/image-object';
import { Vector } from '../../core/models/point.model';
import { TriangulatedContourObject } from '../../shared/active-canvas/canvas-objects/triangulated-contour-object';
import { DataService } from '../../core/services/data.service';
import { SectorTriangulationMeshPartsModel } from '../../core/models/api.models';
import { CanvasObject } from '../../shared/active-canvas/models/canvas-object.interface';

@Component({
    selector: 'app-mosaic-generation',
    standalone: true,
    imports: [ActiveCanvasComponent],
    templateUrl: './mosaic-generation.component.html',
    styleUrl: './mosaic-generation.component.scss',
})
export class MosaicGenerationComponent implements AfterViewInit {
    @ViewChild('activeCanvas')
    activeCanvas: ActiveCanvasComponent;

    canvasObjects: CanvasObject[] = [];

    constructor(private store: Store, private dataService: DataService) {}

    async ngAfterViewInit(): Promise<void> {
        const mosaicConfig: MosaicConfig = this.store.selectSignal(selectMosaicConfig)();
        const image = new Image();
        image.src = mosaicConfig.base64Image;
        await image.decode();

        this.activeCanvas.addCanvasObject(new GridObject());

        const imageSize: Size = {
            height: (image.height / image.width) * mosaicConfig.mosaicWidth,
            width: mosaicConfig.mosaicWidth,
        };

        this.activeCanvas.addCanvasObject(new ImageObject(image, Vector.zero, imageSize));

        this.setInitZoomForImage(imageSize);
        this.activeCanvas.rewrite();
        this.requestSectorsTriangulationMesh();
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
        const sectors: Sector[] = this.store.selectSignal(selectSectors)();

        const sectorTriangulationRequest = sectors.map((sector) => ({
            polygonVertices: sector.vertices,
            sectionMaxArea: sector.properties.sectionMaxArea,
            sectionMinAngle: sector.properties.sectionMinAngle,
        }));

        this.dataService
            .getMosaicTriangulationMesh(sectorTriangulationRequest)
            .subscribe((sectorsTriangulations: SectorTriangulationMeshPartsModel[]) => 
                this.addSectorsTriangulationMesh(sectors, sectorsTriangulations)
            );
    }

    private addSectorsTriangulationMesh(
        sectors: Sector[],
        sectorsTriangulations: SectorTriangulationMeshPartsModel[]
    ): void {
        for (let i = 0; i < sectorsTriangulations.length; ++i) {
            for (const meshPart of sectorsTriangulations[i].parts) {
                this.canvasObjects.push(new TriangulatedContourObject(meshPart.triangles, sectors[i].color, 10 + i));
            }
        }

        for (const elem of this.canvasObjects) {
            this.activeCanvas.addCanvasObject(elem);
        }

        this.activeCanvas.rewrite();
    }
}
