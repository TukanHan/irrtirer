import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { DialogData } from '../../../shared/dialog/dialog-data.interface';
import { SectorSchema } from '../../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { CdkDragDrop, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { SectorsContoursService } from '../sectors-contours.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-sectors-contours-list',
    imports: [MatButtonModule, MatIconModule, MatMenuModule, CdkDropList, CdkDrag, TranslateModule],
    templateUrl: './sectors-contours-list.component.html',
    styleUrl: './sectors-contours-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectorsContoursListComponent {
    private readonly store = inject(Store);

    protected readonly translate = inject(TranslateService);

    private readonly dialog = inject(MatDialog);

    private readonly router = inject(Router);

    private readonly destroyRef = inject(DestroyRef);

    protected selectedSector: SectorSchema | null;

    protected readonly sectors = this.store.selectSignal<SectorSchema[]>(selectSectors);

    private readonly sectorsContoursService = inject(SectorsContoursService);

    protected openRemoveSectorDialog(sector: SectorSchema): void {
        const dialogData: DialogData = {
            title: this.translate.instant('tool.sectors.contourList.removeSector'),
            message: this.translate.instant('tool.sectors.contourList.removeSectorMessage'),
        };

        this.dialog
            .open<DialogComponent, DialogData, boolean>(DialogComponent, { data: dialogData })
            .afterClosed()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(MosaicProjectActions.sectorRemoved({ sector }));
                    if (this.selectedSector === sector) {
                        this.resetSelectedSector();
                    }
                    this.sectorsContoursService.emitSectorListChanged({ selectedSector: this.selectedSector! });
                }
            });
    }

    protected emitSectorToEditContour(sector: SectorSchema): void {
        this.sectorsContoursService.emitEditedSectorContour({
            sector: { ...sector, vertices: [...sector.vertices] },
            selectedVertex: sector.vertices.at(-1)!,
        });
    }

    protected navigateToNewSectorPanel(): void {
        this.router.navigate([`/tool/sectors/contour`]);
    }

    protected navigateToContourPanel(sector: SectorSchema): void {
        this.router.navigate([`/tool/sectors/${sector.id}/contour`]);
    }

    protected navigateToPropertyPanel(sector: SectorSchema): void {
        this.router.navigate([`/tool/sectors/${sector.id}/property`]);
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
        this.sectorsContoursService.emitSectorListChanged({ selectedSector: this.selectedSector! });
    }

    private resetSelectedSector(): void {
        const sectors: SectorSchema[] = this.sectors();
        this.selectedSector = sectors.length ? sectors[0] : null;
    }
}
