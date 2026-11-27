import { AsyncPipe } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { IdsFlatButton } from 'irr-design-system/action';
import { ExpandablePanel } from '../../../../shared/expandable-panel/expandable-panel';
import { ScrollableList } from '../../../../shared/scrollable-list/scrollable-list';
import { GeneratedSectorModel, GeneratedTileModel } from '../../mosaic-generation.interface';

@Component({
    selector: 'app-sector-list-elem',
    imports: [MatIconModule, IdsFlatButton, AsyncPipe, ExpandablePanel, TranslatePipe, ScrollableList],
    templateUrl: './sector-list-elem.html',
    styleUrl: './sector-list-elem.scss',
})
export class SectorListElem {
    public readonly sector = input.required<GeneratedSectorModel>();

    protected readonly isOpen = signal<boolean>(false);

    protected readonly items$ = computed<Observable<GeneratedTileModel[]>>(() => this.sector().tiles$);

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
