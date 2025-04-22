import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TileModel } from '../../../../core/models/mosaic-project.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-tile-list-elem',
    imports: [MatIconModule, MatButtonModule, MatMenuModule, TranslateModule],
    templateUrl: './tile-list-elem.component.html',
    styleUrl: './tile-list-elem.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileListElemComponent {
    public readonly tile = input.required<TileModel>();

    private readonly router = inject(Router);

    protected navigateToTileDetails(): void {
        this.router.navigate([`/tool/tray/tile/${this.tile().id}`]);
    }
}
