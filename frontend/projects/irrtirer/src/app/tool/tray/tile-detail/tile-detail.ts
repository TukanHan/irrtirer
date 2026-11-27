import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IdsFramedButton } from 'irr-design-system/action';
import { TileModel } from '../../../core/models/mosaic-project.model';
import { selectTilesSets } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { ColorPicker } from '../../../shared/color-picker/color-picker';

@Component({
    selector: 'app-tile-detail',
    imports: [TranslatePipe, IdsFramedButton, ColorPicker],
    template: `
        <div class="flex flex-row gap-3">
            <ids-framed-button class="flex-1" (clicked)="navigateToMenu()"> {{ 'common.return' | translate }} </ids-framed-button>
            <ids-framed-button class="flex-1" variant="accent" disabled> {{ 'common.edit' | translate }} </ids-framed-button>
        </div>

        <div class="flex flex-1 flex-col gap-2">
            @if (tile(); as tile) {
                <div class="p-0.5 text-contrast-medium">
                    <div class="font-medium">{{ 'tool.tiles.details.tileId' | translate }}:</div>
                    <div class="text-xs truncate">{{ tile.id }}</div>
                </div>

                <app-color-picker [disabled]="true" [value]="tile.color" [label]="translate.instant('tool.tiles.details.tileColor')" />
            } @else {
                <div class="m-auto text-contrast-medium">{{ 'tool.tiles.details.tileNoExist' | translate }}</div>
            }
        </div>
    `,
    host: { class: 'flex flex-col gap-3 h-full' },
})
export class TileDetail implements OnInit {
    protected readonly tile = signal<TileModel | null>(null);

    private readonly route = inject(ActivatedRoute);

    private readonly store = inject(Store);

    private readonly router = inject(Router);

    protected readonly translate = inject(TranslateService);

    public ngOnInit(): void {
        const tileId = this.route.snapshot.paramMap.get('id');
        if (tileId) {
            const tileModel = this.getTileModel(tileId);
            if (tileModel) {
                this.tile.set(tileModel);
            }
        }
    }

    private getTileModel(id: string): TileModel | undefined {
        const tilesSets = this.store.selectSignal(selectTilesSets)();
        return tilesSets.flatMap((tilesSets) => tilesSets.tiles).find((x) => x.id === id);
    }

    protected navigateToMenu(): void {
        this.router.navigate(['/tool/tray']);
    }
}
