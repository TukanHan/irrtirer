import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
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
import { EditedSectorContour } from './sectors-contours.interfaces';
import { SectorsContoursListComponent } from './sectors-contours-list/sectors-contours-list.component';
import { ArrayHelpers } from '../../core/helpers/array-helpers';

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
    ],
    templateUrl: './sectors.component.html',
    styleUrl: './sectors.component.scss',
})
export class SectorsComponent implements AfterViewInit, OnDestroy {
    canvasMode: 'movement' | 'selection' = 'movement';

    @ViewChild('activeCanvas')
    activeCanvas: ActiveCanvasComponent;

    @ViewChild('sectorContourEditionPanel')
    sectorContourEditionPanel: SectorContourEditionComponent;

    visualElems: CanvasObject[] = [];

    editedSector$: Observable<EditedSectorContour | null> = this.sectorsContoursSevice.editedSectorContour$;

    subscription: Subscription = new Subscription();

    constructor(private store: Store, private sectorsContoursSevice: SectorsContoursService) {}

    async ngAfterViewInit(): Promise<void> {
        const mosaicConfig: MosaicConfig = this.store.selectSignal(selectMosaicConfig)();
        const image = new Image();
        image.src = mosaicConfig.base64Image;
        await image.decode();

        this.activeCanvas.addCanvasObject(new GridObject());

        this.activeCanvas.addCanvasObject(
            new ImageObject(image, Vector.zero, {
                height: (image.height / image.width) * mosaicConfig.mosaicWidth,
                width: mosaicConfig.mosaicWidth,
            })
        );

        this.subscribeOnEditedSectorChanged();
        this.subscribeOnSectorListChanged();
        this.redrawSectors();
    }

    private subscribeOnEditedSectorChanged(): void {
        this.subscription.add(this.editedSector$.subscribe((s) => this.onEditedSectorChanged(s)));
    }

    private subscribeOnSectorListChanged(): void {
        this.subscription.add(this.sectorsContoursSevice.sectorListChange$.subscribe(() => this.redrawSectors()));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    canvasOptionChanged(): void {
        this.activeCanvas.options = {
            isMovable: this.canvasMode === 'movement',
        };
    }

    onCanvasClicked(point: Vector): void {
        let selectedSector: EditedSectorContour | null;
        this.editedSector$.pipe(take(1)).subscribe((s) => {
            selectedSector = s;
        });

        if (selectedSector) {
            this.sectorContourEditionPanel.addVertex(point);
        }
    }

    onEditedSectorChanged(sector: EditedSectorContour | null): void {
        this.activeCanvas.options = {
            isMovable: !sector,
        };

        this.redrawSectors();
    }

    private redrawSectors(): void {
        for (const object of this.visualElems) {
            this.activeCanvas.removeCanvasObject(object, false);
        }

        this.visualElems = this.prepareSectorsContours();

        for (const object of this.visualElems) {
            this.activeCanvas.addCanvasObject(object, false);
        }

        this.activeCanvas.rewrite();
    }

    private prepareSectorsContours(): CanvasObject[] {
        let editedSectorContour: EditedSectorContour;
        let selectedSectorOnList: Sector;

        this.editedSector$.pipe(take(1)).subscribe((s) => {
            editedSectorContour = s;
        });

        let sectors: Sector[] = this.store.selectSignal(selectSectors)();
        if(editedSectorContour) {
            sectors = ArrayHelpers.addOrUpdate([...sectors], editedSectorContour.sector, (x) => x.id === editedSectorContour.sector.id);
        } else {
            this.sectorsContoursSevice.sectorListChange$.pipe(take(1)).subscribe((event) => {
                selectedSectorOnList = event?.selectedSector;
            });
        }

        return this.mapSectorsToContours(sectors, editedSectorContour, selectedSectorOnList);
    }

    private mapSectorsToContours(sectors: Sector[], editedSector: EditedSectorContour, selectedSectorOnList: Sector): CanvasObject[] {
        return sectors.map((sector, index) => {
            if (sector.id === editedSector?.sector.id) {
                return new OpenedContourObject(
                    [...editedSector.sector.vertices],
                    editedSector.sector.vertices.indexOf(editedSector.selectedVertex),
                    editedSector.sector.color
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
