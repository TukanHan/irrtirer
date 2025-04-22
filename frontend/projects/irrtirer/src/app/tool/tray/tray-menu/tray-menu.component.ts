import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
    private readonly router = inject(Router);

    private readonly store = inject(Store);

    protected readonly tilesSets = this.store.selectSignal<TilesSet[]>(selectTilesSets);

    protected navigateToRandomTiles(): void {
        this.router.navigate(['/tool/tray/random']);
    }
}
