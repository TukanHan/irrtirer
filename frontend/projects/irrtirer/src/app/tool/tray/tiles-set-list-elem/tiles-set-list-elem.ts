import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { TilesSet } from '../../../core/models/mosaic-project.model';
import { ExpandablePanel } from '../../../shared/expandable-panel/expandable-panel';
import { MatIconModule } from '@angular/material/icon';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { Observable } from 'rxjs';
import { DialogData } from '../../../shared/dialog/dialog-data.interface';
import { Dialog } from '../../../shared/dialog/dialog';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { TileListElem } from './tile-list-elem/tile-list-elem';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ScrollableList } from '../../../shared/scrollable-list/scrollable-list';
import { IdsMenu, IdsMenuItem, IdsMenuTrigger } from 'irr-design-system/menu';
import { IdsFlatButton } from 'irr-design-system/action';

@Component({
    selector: 'app-tiles-set-list-elem',
    imports: [ExpandablePanel, IdsFlatButton, MatIconModule, IdsMenu, IdsMenuTrigger, IdsMenuItem, TileListElem, TranslatePipe, ScrollableList],
    templateUrl: './tiles-set-list-elem.html',
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
