import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { IdsFlatButton } from 'irr-design-system/action';
import { IdsIcon } from 'irr-design-system/icon';
import { IdsMenu, IdsMenuItem, IdsMenuTrigger } from 'irr-design-system/menu';
import { TileModel } from '../../../../core/models/mosaic-project.model';

@Component({
    selector: 'app-tile-list-elem',
    imports: [IdsFlatButton, IdsMenu, IdsMenuItem, IdsMenuTrigger, TranslatePipe, IdsIcon],
    template: `
        <span class="block-label-sm"> {{ tile().id }} </span>
        <div class="flex -m-1.5">
            <ids-flat-button
                class="button-size-8 button-content-contrast-medium"
                [ariaLabel]="'common.moreActions' | translate"
                [idsMenuTriggerFor]="menu"
            >
                <ids-icon class="icon-weight-400" name="more_vert" />
            </ids-flat-button>

            <ids-menu #menu>
                <ids-menu-item (clicked)="navigateToTileDetails()">
                    <ids-icon name="page_info" />
                    {{ 'common.details' | translate }}
                </ids-menu-item>
            </ids-menu>
        </div>
    `,
    host: { class: 'list-item-box gap-3' },
})
export class TileListElem {
    public readonly tile = input.required<TileModel>();

    private readonly router = inject(Router);

    protected navigateToTileDetails(): void {
        this.router.navigate([`/tool/tray/tile/${this.tile().id}`]);
    }
}
