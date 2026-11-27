import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { IdsFlatButton } from 'irr-design-system/action';
import { IdsMenu, IdsMenuItem, IdsMenuTrigger } from 'irr-design-system/menu';
import { TilesSet } from '../../../core/models/mosaic-project.model';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { Dialog } from '../../../shared/dialog/dialog';
import { DialogData } from '../../../shared/dialog/dialog-data.interface';
import { ExpandablePanel } from '../../../shared/expandable-panel/expandable-panel';
import { ScrollableList } from '../../../shared/scrollable-list/scrollable-list';
import { TileListElem } from './tile-list-elem/tile-list-elem';

@Component({
    selector: 'app-tiles-set-list-elem',
    imports: [ExpandablePanel, IdsFlatButton, MatIconModule, IdsMenu, IdsMenuTrigger, IdsMenuItem, TileListElem, TranslatePipe, ScrollableList],
    template: `
        @let tilesSetValue = tilesSet();
        <div class="list-elem list-item-box">
            <span class="block-label">{{ tilesSetValue.name }}</span>
            <div class="flex -m-1.5">
                <ids-flat-button
                    class="ids-flat-button--size-small button-content-contrast-medium"
                    [ariaLabel]="'common.moreActions' | translate"
                    [idsMenuTriggerFor]="menu"
                >
                    <mat-icon>more_vert</mat-icon>
                </ids-flat-button>
                <ids-flat-button
                    class="ids-flat-button--size-small button-content-contrast-medium"
                    [ariaLabel]="(isOpen() ? 'common.collapse' : 'common.expand') | translate"
                    (clicked)="toggleTilesList()"
                >
                    <mat-icon class="chevron" [class.closed]="!isOpen()"> keyboard_arrow_up </mat-icon>
                </ids-flat-button>

                <ids-menu #menu>
                    @if (tilesSetValue.source === 'generated') {
                        <ids-menu-item (clicked)="navigateToRandomSetAgain()">
                            <mat-icon class="material-symbols-outlined"> shuffle </mat-icon>
                            {{ 'tool.tiles.menu.generateAgain' | translate }}
                        </ids-menu-item>
                    }
                    <ids-menu-item (clicked)="removeTilesSet()">
                        <mat-icon class="material-symbols-outlined"> delete </mat-icon>
                        {{ 'tool.tiles.menu.removeTilesSet' | translate }}
                    </ids-menu-item>
                </ids-menu>
            </div>
        </div>
        <app-expandable-panel [isOpen]="isOpen()">
            <app-scrollable-list class="mt-1.5" [items]="tilesSetValue.tiles">
                <ng-template #element let-tile>
                    <app-tile-list-elem [tile]="tile" />
                </ng-template>
            </app-scrollable-list>
        </app-expandable-panel>
    `,
})
export class TilesSetListElem {
    public readonly tilesSet = input.required<TilesSet>();

    protected readonly isOpen = signal<boolean>(false);

    private readonly store = inject(Store);

    private readonly dialog = inject(MatDialog);

    private readonly translate = inject(TranslateService);

    private readonly destroyRef = inject(DestroyRef);

    private readonly router = inject(Router);

    protected toggleTilesList(): void {
        this.isOpen.update((value) => !value);
    }

    protected removeTilesSet(): void {
        this.showRemoveTilesSetWarning()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(MosaicProjectActions.tilesSetRemoved({ removedTilesSet: this.tilesSet() }));
                }
            });
    }

    private showRemoveTilesSetWarning(): Observable<boolean> {
        const dialogData: DialogData = {
            title: this.translate.instant('tool.tiles.menu.removeTilesSet'),
            message: this.translate.instant('tool.tiles.menu.removeTilesSetQuery', { name: this.tilesSet().name }),
        };

        return this.dialog.open(Dialog, { data: dialogData }).afterClosed();
    }

    protected navigateToRandomSetAgain(): void {
        this.router.navigate([`/tool/tray/random/${this.tilesSet().id}`]);
    }
}
