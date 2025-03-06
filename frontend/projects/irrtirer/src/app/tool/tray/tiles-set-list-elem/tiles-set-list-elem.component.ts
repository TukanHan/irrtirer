import { ChangeDetectionStrategy, Component, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { TilesSet } from '../../../core/models/mosaic-project.model';
import { CommonModule } from '@angular/common';
import { ExpandablePanelComponent } from '../../../shared/expandable-panel/expandable-panel.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { Observable } from 'rxjs';
import { DialogData } from '../../../shared/dialog/dialog-data.interface';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { TileListElemComponent } from './tile-list-elem/tile-list-elem.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-tiles-set-list-elem',
    imports: [CommonModule, ExpandablePanelComponent, MatButtonModule, MatIconModule, MatMenuModule, TileListElemComponent, TranslateModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './tiles-set-list-elem.component.html',
    styleUrl: './tiles-set-list-elem.component.scss',
})
export class TilesSetListElemComponent {
    public tilesSet: InputSignal<TilesSet> = input.required();

    protected isOpenSignal: WritableSignal<boolean> = signal(false);

    constructor(
        private store: Store,
        private dialog: MatDialog, 
        private translate: TranslateService
    ) {}

    protected toggleTilesList(): void {
        this.isOpenSignal.update((value) => !value);
    }

    protected removeTilesSet(): void {
        this.showRemoveTilesSetWarning().subscribe((result) => {
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

        return this.dialog.open(DialogComponent, { data: dialogData }).afterClosed();
    }
}
