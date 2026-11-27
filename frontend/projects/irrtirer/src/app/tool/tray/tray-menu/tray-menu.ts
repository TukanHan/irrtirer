import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslatePipe } from '@ngx-translate/core';
import { IdsFramedButton } from 'irr-design-system/action';
import { TilesSet } from '../../../core/models/mosaic-project.model';
import { selectTilesSets } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { TilesSetListElem } from './../tiles-set-list-elem/tiles-set-list-elem';

@Component({
    selector: 'app-tray-menu',
    imports: [IdsFramedButton, TilesSetListElem, TranslatePipe],
    templateUrl: './tray-menu.html',
    host: { class: 'flex flex-col gap-5' },
})
export class TrayMenu {
    private readonly router = inject(Router);

    private readonly store = inject(Store);

    protected readonly tilesSets = this.store.selectSignal<TilesSet[]>(selectTilesSets);

    protected navigateToRandomTiles(): void {
        this.router.navigate(['/tool/tray/random']);
    }
}
