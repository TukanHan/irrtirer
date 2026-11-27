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
    template: `
        <div class="flex flex-col gap-2.5">
            <ids-framed-button disabled> {{ 'tool.tiles.menu.loadFromFile' | translate }} </ids-framed-button>
            <ids-framed-button disabled> {{ 'tool.tiles.menu.createTile' | translate }} </ids-framed-button>
            <ids-framed-button variant="accent" (clicked)="navigateToRandomTiles()">
                {{ 'tool.tiles.menu.randomTiles' | translate }}
            </ids-framed-button>
        </div>

        <div class="flex flex-col gap-1.5 flex-1">
            @for (tilesSet of tilesSets(); track $index) {
                <app-tiles-set-list-elem [tilesSet]="tilesSet" />
            } @empty {
                <span class="m-auto text-contrast-light"> {{ 'tool.tiles.menu.noTiles' | translate }} </span>
            }
        </div>
    `,
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
