import { CdkDragDrop, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IdsFlatButton, IdsFramedButton } from 'irr-design-system/action';
import { IdsIcon } from 'irr-design-system/icon';
import { IdsMenu, IdsMenuItem, IdsMenuTrigger } from 'irr-design-system/menu';
import { SectorSchema } from '../../../core/models/mosaic-project.model';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { selectSectors } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { Dialog } from '../../../shared/dialog/dialog';
import { DialogData } from '../../../shared/dialog/dialog-data.interface';
import { SectorsEventBus } from '../sectors-event-bus';

@Component({
    selector: 'app-sectors-contours-list',
    imports: [IdsFramedButton, MatIcon, IdsMenuTrigger, IdsMenu, IdsMenuItem, CdkDropList, CdkDrag, TranslatePipe, IdsFlatButton, IdsIcon],
    template: `
        <div class="actions">
            <ids-framed-button variant="accent" (clicked)="navigateToNewSectorPanel()">
                {{ 'tool.sectors.contourList.addSector' | translate }}
            </ids-framed-button>
        </div>

        @if (sectors().length) {
            <div cdkDropList class="sectors-list" (cdkDropListDropped)="dropSectorBox($event)">
                @for (sector of sectors(); track sector) {
                    <div class="sector-box" cdkDrag (mousedown)="onSectorSelected(sector)">
                        <div class="list-item-box" [class.selected]="sector === selectedSector">
                            <span class="block-label">{{ sector.name }}</span>

                            <ids-flat-button
                                class="sector-actions button-size-8 button-content-contrast-medium"
                                [ariaLabel]="'common.moreActions' | translate"
                                (mousedown)="$event.stopPropagation()"
                                [idsMenuTriggerFor]="menu"
                            >
                                <mat-icon>more_vert</mat-icon>
                            </ids-flat-button>

                            <ids-menu #menu>
                                <ids-menu-item (clicked)="navigateToContourPanel(sector)">
                                    <ids-icon name="draw" />
                                    {{ 'tool.sectors.contourList.editContour' | translate }}
                                </ids-menu-item>
                                <ids-menu-item (clicked)="navigateToPropertyPanel(sector)">
                                    <ids-icon name="settings_input_composite" />
                                    {{ 'tool.sectors.contourList.editProperties' | translate }}
                                </ids-menu-item>
                                <ids-menu-item (clicked)="openRemoveSectorDialog(sector)">
                                    <ids-icon name="delete" />
                                    {{ 'tool.sectors.contourList.removeSector' | translate }}
                                </ids-menu-item>
                            </ids-menu>
                        </div>
                    </div>
                }
            </div>
        } @else {
            <div class="no-sectors">{{ 'tool.sectors.contourList.noSectors' | translate }}</div>
        }
    `,
    styleUrl: './sectors-contours-list.scss',
})
export class SectorsContoursList {
    private readonly store = inject(Store);

    protected readonly translate = inject(TranslateService);

    private readonly dialog = inject(MatDialog);

    private readonly router = inject(Router);

    private readonly destroyRef = inject(DestroyRef);

    protected selectedSector: SectorSchema | null = null;

    protected readonly sectors = this.store.selectSignal<SectorSchema[]>(selectSectors);

    private readonly sectorsEventBus = inject(SectorsEventBus);

    protected openRemoveSectorDialog(sector: SectorSchema): void {
        const dialogData: DialogData = {
            title: this.translate.instant('tool.sectors.contourList.removeSector'),
            message: this.translate.instant('tool.sectors.contourList.removeSectorMessage', { sectorName: sector.name }),
        };

        this.dialog
            .open<Dialog, DialogData, boolean>(Dialog, { data: dialogData })
            .afterClosed()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(MosaicProjectActions.sectorRemoved({ sector }));
                    if (this.selectedSector === sector) {
                        this.resetSelectedSector();
                    }
                    this.sectorsEventBus.emitSectorListChanged({ selectedSector: this.selectedSector! });
                }
            });
    }

    protected emitSectorToEditContour(sector: SectorSchema): void {
        this.sectorsEventBus.emitEditedSectorContour({
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
        this.sectorsEventBus.emitEditedSectorProperty({
            sector: sector,
            mesh: null,
            contour: null,
        });
    }

    protected onSectorSelected(sector: SectorSchema): void {
        this.selectedSector = sector;
        this.sectorsEventBus.emitSectorListChanged({ selectedSector: sector });
    }

    protected dropSectorBox(event: CdkDragDrop<string[]>): void {
        this.store.dispatch(MosaicProjectActions.sectorShifted({ prevIndex: event.previousIndex, newIndex: event.currentIndex }));
        this.sectorsEventBus.emitSectorListChanged({ selectedSector: this.selectedSector! });
    }

    private resetSelectedSector(): void {
        const sectors: SectorSchema[] = this.sectors();
        this.selectedSector = sectors.length ? sectors[0] : null;
    }
}
