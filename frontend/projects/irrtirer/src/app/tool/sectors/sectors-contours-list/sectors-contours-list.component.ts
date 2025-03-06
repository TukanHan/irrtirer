import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { DialogData } from '../../../shared/dialog/dialog-data.interface';
import { SectorSchema } from '../../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { CdkDragDrop, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { RandomHelper } from '../../../core/helpers/random-helper';
import { SectorsContoursService } from '../sectors-contours.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import Color from 'color';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-sectors-contours-list',
    imports: [MatButtonModule, MatIconModule, MatMenuModule, CommonModule, CdkDropList, CdkDrag, TranslateModule],
    templateUrl: './sectors-contours-list.component.html',
    styleUrl: './sectors-contours-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectorsContoursListComponent {
    protected sectorsSignal: Signal<SectorSchema[]>;

    protected selectedSector: SectorSchema;

    constructor(
        public dialog: MatDialog,
        private store: Store,
        private sectorsContoursService: SectorsContoursService,
        private translate: TranslateService
    ) {
        this.sectorsSignal = store.selectSignal(selectSectors);
    }

    protected addNewSector(): void {
        const sector: SectorSchema = {
            id: crypto.randomUUID(),
            name: '',
            color: Color({ h: RandomHelper.nextFloat(0, 360), s: 75, v: 95 }).hex(),
            vertices: [],
            properties: {
                sectionMaxArea: 5,
                sectionMinAngle: 35,
                maxTileRadius: 4,
                minTileRadius: 0,
                tilesMargin: 0.1,
                evaluationParams: {
                    singleSectionPopulation: 2,
                    overlappingAreaOutsideSector: -2,
                    additionalPopulationOfNeighboringSectors: 4,
                    overlappingNotPopulatedSections: -1,
                    tileColorMismatch: -2,
                },
                populationParams: {
                    initialPopulationSize: 100,
                    countOfTriesToInsertTile: 30,
                    countOfTrianglePositionDraws: 30,
                    countOfColorMatchingAttempts: 40,
                    iterationsCount: 100,
                    populationSize: 10,
                },
            },
        };

        this.emitSectorToEditContour(sector);
    }

    protected openRemoveSectorDialog(sector: SectorSchema): void {
        const dialogData: DialogData = {
            title: this.translate.instant('tool.sectors.contourList.removeSector'),
            message: 'Czy na pewno chcesz usunąć sektor?',
        };

        const dialogRef = this.dialog.open(DialogComponent, { data: dialogData });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.store.dispatch(MosaicProjectActions.sectorRemoved({ sector }));
                if (this.selectedSector === sector) {
                    this.resetSelectedSector();
                }
                this.sectorsContoursService.emitSectorListChanged({ selectedSector: this.selectedSector });
            }
        });
    }

    protected emitSectorToEditContour(sector: SectorSchema): void {
        this.sectorsContoursService.emitEditedSectorContour({
            sector: { ...sector, vertices: [...sector.vertices] },
            selectedVertex: sector.vertices.at(-1),
        });
    }

    protected emitSectorToEditProperty(sector: SectorSchema): void {
        this.sectorsContoursService.emitEditedSectorProperty({
            sector: sector,
            mesh: null,
            contour: null,
        });
    }

    protected onSectorSelected(sector: SectorSchema): void {
        this.selectedSector = sector;
        this.sectorsContoursService.emitSectorListChanged({ selectedSector: sector });
    }

    protected dropSectorBox(event: CdkDragDrop<string[]>): void {
        this.store.dispatch(MosaicProjectActions.sectorShifted({ prevIndex: event.previousIndex, newIndex: event.currentIndex }));
        this.sectorsContoursService.emitSectorListChanged({ selectedSector: this.selectedSector });
    }

    private resetSelectedSector(): void {
        const sectors: SectorSchema[] = this.sectorsSignal();
        this.selectedSector = sectors.length ? sectors.at(0) : null;
    }
}
