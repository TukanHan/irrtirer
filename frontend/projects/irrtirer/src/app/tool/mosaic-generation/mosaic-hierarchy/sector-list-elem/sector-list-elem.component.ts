import { Component, computed, inject, input, signal } from '@angular/core';
import { GeneratedSectorModel, GeneratedTileModel } from '../../mosaic-generation.interface';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ExpandablePanel } from '../../../../shared/expandable-panel/expandable-panel';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ScrollableListComponent } from '../../../../shared/scrollable-list/scrollable-list.component';
import { IdsFlatButton } from 'irr-design-system/action';

@Component({
    selector: 'app-sector-list-elem',
    imports: [MatIconModule, IdsFlatButton, AsyncPipe, ExpandablePanel, TranslatePipe, ScrollableListComponent],
    templateUrl: './sector-list-elem.component.html',
    styleUrl: './sector-list-elem.component.scss',
})
export class SectorListElemComponent {
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
