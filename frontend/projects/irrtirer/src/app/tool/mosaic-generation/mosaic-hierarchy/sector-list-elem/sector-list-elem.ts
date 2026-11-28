import { AsyncPipe } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { IdsFlatButton } from 'irr-design-system/action';
import { IdsIcon } from 'irr-design-system/icon';
import { ExpandablePanel } from '../../../../shared/expandable-panel/expandable-panel';
import { ScrollableList } from '../../../../shared/scrollable-list/scrollable-list';
import { GeneratedSectorModel, GeneratedTileModel } from '../../mosaic-generation.interface';

@Component({
    selector: 'app-sector-list-elem',
    imports: [IdsIcon, IdsFlatButton, AsyncPipe, ExpandablePanel, TranslatePipe, ScrollableList],
    template: `
        <div class="parent-elem list-item-box">
            <span class="block-label">{{ sector().schema.name }}</span>
            <div class="sector-actions">
                <ids-flat-button
                    class="sector-action visibility-icon button-size-8 button-content-contrast-medium"
                    [ariaLabel]="(areTilesVisible() ? 'tool.generation.sectorList.hideTiles' : 'tool.generation.sectorList.showTiles') | translate"
                    (clicked)="toggleTilesVisibility()"
                >
                    <ids-icon [name]="areTilesVisible() ? 'visibility' : 'visibility_off'" />
                </ids-flat-button>
                <ids-flat-button
                    class="sector-action button-size-8 button-content-contrast-medium"
                    [ariaLabel]="(isOpen() ? 'common.collapse' : 'common.expand') | translate"
                    (clicked)="toggleTilesList()"
                >
                    <ids-icon class="chevron icon-weight-400" name="keyboard_arrow_up" [class.closed]="!isOpen()" />
                </ids-flat-button>
            </div>
        </div>
        <app-expandable-panel class="panel" [isOpen]="isOpen()">
            @let items = items$() | async;
            @if (items && items.length) {
                <app-scrollable-list [items]="items">
                    <ng-template #element let-tile>
                        <div class="list-item-box">
                            <span class="block-label-sm"> {{ tile.tileTransform.tileId }} </span>
                        </div>
                    </ng-template>
                </app-scrollable-list>
            } @else {
                <span class="empty">{{ 'tool.generation.sectorList.noTiles' | translate }}</span>
            }
        </app-expandable-panel>
    `,
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
