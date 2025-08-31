import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { GeneratedSectorModel, GeneratedTileModel } from '../../mosaic-generation.interface';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { ExpandablePanelComponent } from '../../../../shared/expandable-panel/expandable-panel.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-sector-list-elem',
    imports: [
        MatIconModule,
        MatButtonModule,
        AsyncPipe,
        ExpandablePanelComponent,
        TranslateModule
    ],
    templateUrl: './sector-list-elem.component.html',
    styleUrl: './sector-list-elem.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectorListElemComponent {
    public readonly sector = input.required<GeneratedSectorModel>();

    protected readonly isOpen = signal<boolean>(false);

    protected readonly items$ = computed<Observable<GeneratedTileModel[]>>(() => this.sector().tiles$ );

    protected readonly areTilesVisible = signal<boolean>(true);

    protected readonly translate = inject(TranslateService);

    protected toggleTilesList(): void {
        this.isOpen.update((value) => !value);
    }

    protected toggleTilesVisibility(): void {
        this.areTilesVisible.update((value) => !value);
        this.sector().setTilesVisibility(this.areTilesVisible());
    }
}
