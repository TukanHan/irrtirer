import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { DialogData } from '../../../shared/dialog/dialog-data.interface';
import { Sector } from '../../../core/models/mosaic-project.model';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { CdkDragDrop, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { RandomHelper } from '../../../core/helpers/random-helper';
import { SectorsContoursService } from '../sectors-contours.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ColorHelper } from '../../../core/helpers/color-helper';

@Component({
    selector: 'app-sectors-contours-list',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, MatMenuModule, CommonModule, CdkDropList, CdkDrag],
    templateUrl: './sectors-contours-list.component.html',
    styleUrl: './sectors-contours-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectorsContoursListComponent {
    sectors$: Observable<Sector[]>;

    selectedSector: Sector;

    constructor(
        public dialog: MatDialog,
        private store: Store,
        private sectorsContoursSevice: SectorsContoursService
    ) {
        this.sectors$ = store.select(selectSectors);
    }

    addNewSector(): void {
        const sector: Sector = {
            id: crypto.randomUUID(),
            name: '',
            color: ColorHelper.hsvToRgb({
                h: RandomHelper.nextFloat(0, 1),
                s: 0.75,
                v: 0.95,
            }),
            vertices: [],
        };

        this.emitSectorToEditContour(sector);
    }

    openRemoveSectorDialog(sector: Sector): void {
        const dialogData: DialogData = {
            title: 'Usuń sektor',
            message: 'Czy na pewno chcesz usunąć sektor?',
        };

        const dialogRef = this.dialog.open(DialogComponent, { data: dialogData });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.store.dispatch(MosaicProjectActions.sectorRemoved({ sector }));
                if (this.selectedSector === sector) {
                    this.resetSelectedSector();
                }
                this.sectorsContoursSevice.emitSectorListChanged({ selectedSector: this.selectedSector });
            }
        });
    }

    emitSectorToEditContour(sector: Sector): void {
        this.sectorsContoursSevice.emitEditedSectorContour({
            sector: { ...sector, vertices: [...sector.vertices] },
            selectedVertex: sector.vertices.at(-1),
        });
    }

    onSectorSelected(sector: Sector): void {
        this.selectedSector = sector;
        this.sectorsContoursSevice.emitSectorListChanged({ selectedSector: sector });
    }

    dropSectorBox(event: CdkDragDrop<string[]>): void {
        this.store.dispatch(
            MosaicProjectActions.sectorShifted({ prevIndex: event.previousIndex, newIndex: event.currentIndex })
        );
        this.sectorsContoursSevice.emitSectorListChanged({ selectedSector: this.selectedSector });
    }

    resetSelectedSector(): void {
        let sectors: Sector[] = null;
        this.sectors$.pipe(take(1)).subscribe((x) => {
            sectors = x;
        });
        this.selectedSector = sectors.length ? sectors.at(0) : null;
    }
}
