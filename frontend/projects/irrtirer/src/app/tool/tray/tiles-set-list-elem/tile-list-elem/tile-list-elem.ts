import { Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { IdsFlatButton } from 'irr-design-system/action';
import { IdsMenu, IdsMenuItem, IdsMenuTrigger } from 'irr-design-system/menu';
import { TileModel } from '../../../../core/models/mosaic-project.model';

@Component({
    selector: 'app-tile-list-elem',
    imports: [MatIconModule, IdsFlatButton, IdsMenu, IdsMenuItem, IdsMenuTrigger, TranslatePipe],
    templateUrl: './tile-list-elem.html',
    host: { class: 'list-item-box gap-3' },
})
export class TileListElem {
    public readonly tile = input.required<TileModel>();

    private readonly router = inject(Router);

    protected navigateToTileDetails(): void {
        this.router.navigate([`/tool/tray/tile/${this.tile().id}`]);
    }
}
