import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActiveCanvasComponent } from '../../shared/active-canvas/active-canvas.component';
import { Store } from '@ngrx/store';
import { selectMosaicConfig, selectSectors } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Vector } from '../../core/models/point.model';
import { MosaicConfig, Sector } from '../../core/models/mosaic-project.model';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ImageObject } from '../../shared/active-canvas/canvas-objects/image-object';
import { GridObject } from '../../shared/active-canvas/canvas-objects/grid-object';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OpenedContourObject } from '../../shared/active-canvas/canvas-objects/opened-contour-object';
import { Observable, Subscription, take } from 'rxjs';
import { CanvasObject } from '../../shared/active-canvas/models/canvas-object.interface';
import { ClosedContourObject } from '../../shared/active-canvas/canvas-objects/closed-contour-object';
import { SectorsContoursService } from './sectors-contours.service';
import { SectorContourEditionComponent } from './sector-contour-edition/sector-contour-edition.component';
import { EditedSectorContour, EditedSectorWithTriangulationMesh } from './sectors-contours.interfaces';
import { SectorsContoursListComponent } from './sectors-contours-list/sectors-contours-list.component';
import { ArrayHelpers } from '../../core/helpers/array-helpers';
import { Size } from '../../core/models/size.interface';
import { SectorPropertyEditorComponent } from "./sector-property-editor/sector-property-editor.component";
import { toSignal } from '@angular/core/rxjs-interop';
import { TriangulatedContourObject } from '../../shared/active-canvas/canvas-objects/triangulated-contour-object';

@Component({
    selector: 'app-sectors',
    standalone: true,
    imports: [
    ActiveCanvasComponent,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    SectorsContoursListComponent,
    SectorContourEditionComponent,
    SectorPropertyEditorComponent
],
    templateUrl: './sectors.component.html',
    styleUrl: './sectors.component.scss',
})
export class SectorsComponent implements OnInit, AfterViewInit, OnDestroy {
    canvasMode: 'movement' | 'selection' = 'movement';

    @ViewChild('activeCanvas')
    activeCanvas: ActiveCanvasComponent;

    @ViewChild('sectorContourEditionPanel')
    sectorContourEditionPanel: SectorContourEditionComponent;

    visualElems: CanvasObject[] = [];

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

        this.activeCanvas.addCanvasObject(new GridObject());

        const imageSize: Size = {
            height: (image.height / image.width) * mosaicConfig.mosaicWidth,
            width: mosaicConfig.mosaicWidth,
        };

        this.activeCanvas.addCanvasObject(new ImageObject(image, Vector.zero, imageSize));

        this.subscribeOnEditedSectorChange();
        this.subscribeOnEditedSectorPropertiesChange();
        this.subscribeOnSectorListChange();
        this.setInitZoomForImage(imageSize);
        this.activeCanvas.rewrite();
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
            width: (imageSize.width * 1.1) / this.activeCanvas.viewport.cmSize.width
        };

        const zoom: number = Math.max(imageZoom.height, imageZoom.width);
        this.activeCanvas.setZoom(zoom);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onCanvasClicked(point: Vector): void {
        const selectedSector: EditedSectorContour = this.getSectorForContourEdition();
        if (selectedSector) {
            this.sectorContourEditionPanel.addVertex(point);
        }
    }

    onEditedSectorChanged(sector: EditedSectorContour): void {
        this.activeCanvas.options = {
            isMovable: !sector,
        };

        this.redrawSectors();
    }

    private redrawSectors(): void {
        for (const object of this.visualElems) {
            this.activeCanvas.removeCanvasObject(object);
        }

        this.visualElems = this.prepareSectorsContours();

        for (const object of this.visualElems) {
            this.activeCanvas.addCanvasObject(object);
        }

        this.activeCanvas.rewrite();
    }

    private prepareSectorsContours(): CanvasObject[] {
        const editedSectorContour: EditedSectorContour = this.getSectorForContourEdition();
        const sectorWithTriangulationMesh: EditedSectorWithTriangulationMesh = this.getSectorForPropertyEdition();
        let selectedSectorOnList: Sector;

        let sectors: Sector[] = this.store.selectSignal(selectSectors)();
        if(editedSectorContour) {
            sectors = ArrayHelpers.addOrUpdate([...sectors], editedSectorContour.sector, (x) => x.id === editedSectorContour.sector.id);
        } else {
            this.service.sectorListChange$.pipe(take(1)).subscribe((event) => {
                selectedSectorOnList = event?.selectedSector;
            });
        }

        return this.mapSectorsToContours(sectors, editedSectorContour, sectorWithTriangulationMesh, selectedSectorOnList);
    }

    private mapSectorsToContours(
        sectors: Sector[],
        editedSector: EditedSectorContour,
        sectorWithTriangulationMesh: EditedSectorWithTriangulationMesh,
        selectedSectorOnList: Sector
    ): CanvasObject[] {
        return sectors.map((sector, index) => {
            if (sector.id === editedSector?.sector.id) {
                return new OpenedContourObject(
                    [...editedSector.sector.vertices],
                    editedSector.sector.vertices.indexOf(editedSector.selectedVertex),
                    editedSector.sector.color
                );
            } else if(sectorWithTriangulationMesh?.mesh && sector.id === sectorWithTriangulationMesh?.sector.id) {
                return new TriangulatedContourObject(
                    [...sectorWithTriangulationMesh.sector.vertices],
                    sectorWithTriangulationMesh.mesh,
                    sectorWithTriangulationMesh.sector.color,
                );
            } else {
                const contour = new ClosedContourObject([...sector.vertices], sector.color, 10 + index);
                if(sector.id === selectedSectorOnList?.id) {
                    contour.lineThicnses = 10;
                }
                return contour;
            }
        });
    }
}
