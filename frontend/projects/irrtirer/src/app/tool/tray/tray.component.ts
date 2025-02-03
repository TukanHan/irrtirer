import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { GenerateTilesComponent } from './generate-tiles/generate-tiles.component';
import { MatButtonModule } from '@angular/material/button';
import { TilesSet } from '../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../core/state/mosaic-project/mosaic-project.actions';
import { selectTilesSets } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TileSetComponent } from './tile-set/tile-set.component';
import { DialogData } from '../../shared/dialog/dialog-data.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
    selector: 'app-tray',
    imports: [MatExpansionModule, MatIconModule, GenerateTilesComponent, MatButtonModule, CommonModule, TileSetComponent],
    templateUrl: './tray.component.html',
    styleUrl: './tray.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrayComponent {
    tilesSets$: Observable<TilesSet[]> = this.store.select(selectTilesSets);

    constructor(private store: Store, private dialog: MatDialog) {}

    public onTileSetLoaded(tilesSet: TilesSet): void {
        this.store.dispatch(MosaicProjectActions.tilesSetAdded({ tilesSet }));
    }

    public removeTilesSet(removedTilesSet: TilesSet): void {
        this.showRemoveTilesSetWarning(removedTilesSet).subscribe((result) => {
            if (result) {
                this.store.dispatch(MosaicProjectActions.tilesSetRemoved({ removedTilesSet }));
            }
        });
    }

    showRemoveTilesSetWarning(tilesSet: TilesSet): Observable<boolean> {
        const dialogData: DialogData = {
            title: 'Usuń zestaw kafelków',
            message: `Jesteś pewien że chcesz usunąć zestaw kafelków '${tilesSet.name}'?`,
        };

        return this.dialog.open(DialogComponent, { data: dialogData }).afterClosed();
    }
}
