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
    template: `
        <div class="parent-elem list-item-box">
            <span class="block-label">{{ sector().schema.name }}</span>
            <div class="sector-actions">
                <ids-flat-button
                    class="sector-action visibility-icon ids-flat-button--size-small button-content-contrast-medium"
                    [ariaLabel]="(areTilesVisible() ? 'tool.generation.sectorList.hideTiles' : 'tool.generation.sectorList.showTiles') | translate"
                    (clicked)="toggleTilesVisibility()"
                >
                    <mat-icon class="material-symbols-outlined"> {{ areTilesVisible() ? 'visibility' : 'visibility_off' }} </mat-icon>
                </ids-flat-button>
                <ids-flat-button
                    class="sector-action ids-flat-button--size-small button-content-contrast-medium"
                    [ariaLabel]="(isOpen() ? 'common.collapse' : 'common.expand') | translate"
                    (clicked)="toggleTilesList()"
                >
                    <mat-icon class="chevron" [class.closed]="!isOpen()">keyboard_arrow_up</mat-icon>
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
