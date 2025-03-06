import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TilesSet } from '../../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { selectTilesSets } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { TilesSetListElemComponent } from './../tiles-set-list-elem/tiles-set-list-elem.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-tray-menu',
    imports: [MatButtonModule, TilesSetListElemComponent, TranslateModule],
    templateUrl: './tray-menu.component.html',
    styleUrl: './tray-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrayMenuComponent {
    protected tilesSetsSignal: Signal<TilesSet[]> = this.store.selectSignal(selectTilesSets);

    constructor(private router: Router, private store: Store) {}

    protected navigateToRandomTiles(): void {
        this.router.navigate(['/tool/tray/random']);
    }
}
