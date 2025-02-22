import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMosaicConfig, selectSectors } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Vector } from '../../core/models/math/vector.model';
import { MosaicConfig, SectorSchema } from '../../core/models/mosaic-project.model';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, take } from 'rxjs';
import { SectorsContoursService } from './sectors-contours.service';
import { SectorContourEditionComponent } from './sector-contour-edition/sector-contour-edition.component';
import { EditedSectorContour, EditedSectorWithTriangulationMesh } from './sectors-contours.interfaces';
import { SectorsContoursListComponent } from './sectors-contours-list/sectors-contours-list.component';
import { ArrayHelpers } from '../../core/helpers/array-helpers';
import { Size } from '../../core/models/math/size.interface';
import { SectorPropertyEditorComponent } from './sector-property-editor/sector-property-editor.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActiveCanvasComponent, CanvasObject, IVector } from '../../../../../active-canvas/src/public-api';
import { ImageObject } from '../../shared/canvas-objects/image-object';
import { OpenedContourObject } from '../../shared/canvas-objects/opened-contour-object';
import { TriangulatedContourObject } from '../../shared/canvas-objects/triangulated-contour-object';
import { ClosedContourObject } from '../../shared/canvas-objects/closed-contour-object';

@Component({
    selector: 'app-sectors',
    imports: [
        ActiveCanvasComponent,
        MatButtonToggleModule,
        MatIconModule,
        FormsModule,
        CommonModule,
        SectorsContoursListComponent,
        SectorContourEditionComponent,
        SectorPropertyEditorComponent,
    ],
    templateUrl: './sectors.component.html',
    styleUrl: './sectors.component.scss'
})
export class SectorsComponent implements OnInit, AfterViewInit, OnDestroy {
    canvasMode: 'movement' | 'selection' = 'movement';

    @ViewChild('activeCanvas')
    activeCanvas: ActiveCanvasComponent;

    @ViewChild('sectorContourEditionPanel')
    sectorContourEditionPanel: SectorContourEditionComponent;

    visualElements: CanvasObject[] = [];

    sectorForContourEdition$: Observable<EditedSectorContour> = this.service.sectorForContourEdition$;

    sectorForPropertyEdition$: Observable<EditedSectorWithTriangulationMesh> = this.service.sectorForPropertyEdition$;

    subscription: Subscription = new Subscription();

    getSectorForContourEdition: () => EditedSectorContour;

    getSectorForPropertyEdition: () => EditedSectorWithTriangulationMesh;

    constructor(private store: Store, private service: SectorsContoursService) {
        this.getSectorForContourEdition = toSignal(this.sectorForContourEdition$);
        this.getSectorForPropertyEdition = toSignal(this.sectorForPropertyEdition$);
    }

    ngOnInit(): void {
        this.service.emitEditedSectorContour(null);
        this.service.emitEditedSectorProperty(null);
    }

    async ngAfterViewInit(): Promise<void> {
        const mosaicConfig: MosaicConfig = this.store.selectSignal(selectMosaicConfig)();
        const image = new Image();
        image.src = mosaicConfig.base64Image;
        await image.decode();

        const imageSize: Size = {
            height: (image.height / image.width) * mosaicConfig.mosaicWidth,
            width: mosaicConfig.mosaicWidth,
        };

        this.activeCanvas.addCanvasObject(new ImageObject(image, Vector.zero, imageSize));

        this.subscribeOnEditedSectorChange();
        this.subscribeOnEditedSectorPropertiesChange();
        this.subscribeOnSectorListChange();
        this.setInitZoomForImage(imageSize);
        this.activeCanvas.redraw();
    }

    private subscribeOnEditedSectorChange(): void {
        this.subscription.add(this.sectorForContourEdition$.subscribe((s) => this.onEditedSectorChanged(s)));
    }

    private subscribeOnEditedSectorPropertiesChange(): void {
        this.subscription.add(this.sectorForPropertyEdition$.subscribe(() => this.redrawSectors()));
    }

    private subscribeOnSectorListChange(): void {
        this.subscription.add(this.service.sectorListChange$.subscribe(() => this.redrawSectors()));
    }

    private setInitZoomForImage(imageSize: Size): void {
        const imageZoom: Size = {
            height: (imageSize.height * 1.1) / this.activeCanvas.viewport.cmSize.height,
            width: (imageSize.width * 1.1) / this.activeCanvas.viewport.cmSize.width,
        };

        const zoom: number = Math.max(imageZoom.height, imageZoom.width);
        this.activeCanvas.setZoom(zoom);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onCanvasClicked(point: IVector): void {
        const selectedSector: EditedSectorContour = this.getSectorForContourEdition();
        if (selectedSector) {
            this.sectorContourEditionPanel.addVertex(new Vector(point.x, point.y));
        }
    }

    onEditedSectorChanged(sector: EditedSectorContour): void {
        this.activeCanvas.options = {
            isMovable: !sector,
        };

        this.redrawSectors();
    }

    private redrawSectors(): void {
        this.visualElements.forEach(visualElem => visualElem.removeObject());
        this.visualElements = this.prepareSectorsContours();

        for (const object of this.visualElements) {
            this.activeCanvas.addCanvasObject(object);
        }

        this.activeCanvas.redraw();
    }

    private prepareSectorsContours(): CanvasObject[] {
        const editedSectorContour: EditedSectorContour = this.getSectorForContourEdition();
        const sectorWithTriangulationMesh: EditedSectorWithTriangulationMesh = this.getSectorForPropertyEdition();
        let selectedSectorOnList: SectorSchema;

        let sectors: SectorSchema[] = this.store.selectSignal(selectSectors)();
        if (editedSectorContour) {
            sectors = ArrayHelpers.addOrUpdate(
                [...sectors],
                editedSectorContour.sector,
                (x) => x.id === editedSectorContour.sector.id
            );
        } else {
            this.service.sectorListChange$.pipe(take(1)).subscribe((event) => {
                selectedSectorOnList = event?.selectedSector;
            });
        }

        return this.mapSectorsToContours(sectors, editedSectorContour, sectorWithTriangulationMesh, selectedSectorOnList);
    }

    private mapSectorsToContours(
        sectors: SectorSchema[],
        editedSector: EditedSectorContour,
        sectorWithTriangulationMesh: EditedSectorWithTriangulationMesh,
        selectedSectorOnList: SectorSchema
    ): CanvasObject[] {
        return sectors.map((sector, index) => {
            if (sector.id === editedSector?.sector.id) {
                return new OpenedContourObject(
                    [...editedSector.sector.vertices],
                    editedSector.sector.vertices.indexOf(editedSector.selectedVertex),
                    editedSector.sector.color
                );
            } else if (sectorWithTriangulationMesh?.mesh && sector.id === sectorWithTriangulationMesh?.sector.id) {
                const triangles = sectorWithTriangulationMesh.mesh;
                const contour = sectorWithTriangulationMesh.contour;
                return new TriangulatedContourObject(triangles, contour, sectorWithTriangulationMesh.sector.color);
            } else {
                const contour = new ClosedContourObject([...sector.vertices], sector.color, 10 + index);
                if (sector.id === selectedSectorOnList?.id) {
                    contour.lineThickness = 10;
                }
                return contour;
            }
        });
    }
}
