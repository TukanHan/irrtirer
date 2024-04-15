import { Component, Input } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Tile, TilesSet } from '../../../core/models/mosaic-project.model';
import { CommonModule } from '@angular/common';
import { TileDisplayComponent } from './tile-display/tile-display.component';
import { PaginatorIntl } from '../../../shared/paginator/paginator-intl';

@Component({
    selector: 'app-tile-set',
    standalone: true,
    imports: [MatPaginatorModule, CommonModule, TileDisplayComponent],
    providers: [{provide: MatPaginatorIntl, useClass: PaginatorIntl }],
    templateUrl: './tile-set.component.html',
    styleUrl: './tile-set.component.scss',
})
export class TileSetComponent {
    @Input()
    tilesSet: TilesSet;

    pageIndex: number = 0;
    pageSize: number = 50;

    getData(): Tile[] {
        return this.tilesSet.tiles.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);
    }

    handlePageEvent(event: PageEvent) {
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
    }
}
