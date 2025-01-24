import { ArrayHelpers } from '../../../core/helpers/array-helpers';
import { Tile } from '../models/tile';
import { tileInnerRadiusComparsion } from './tile-inner-radius-comparer';

export class SectionTrayFilter {
    public minRadius: number;
    public maxRadius: number;

    public constructor(minRadius: number, maxRadius: number) {
        this.minRadius = minRadius;
        this.maxRadius = maxRadius;
    }
}

export class SectorTileTray {
    private readonly avalibleTiles: Tile[];

    public constructor(inputTileSet: Iterable<Tile>, filter: SectionTrayFilter) {
        this.avalibleTiles = [];
        for(const tile of inputTileSet) {
            if(this.isTileMatching(tile, filter)) {
                this.avalibleTiles.push(tile);
            }
        }
        
        this.avalibleTiles.sort(tileInnerRadiusComparsion);
    }

    public getAvalibleTilesForSector(): Tile[] {
        return this.avalibleTiles;
    }

    public removeTiles(tiles: Iterable<Tile>): void {
        for (const tile of tiles) {
            const index = ArrayHelpers.binarySearch(this.avalibleTiles, tile, tileInnerRadiusComparsion);
            this.avalibleTiles.splice(index, 1);
        }
    }

    private isTileMatching(tile: Tile, filter: SectionTrayFilter): boolean {
        if ((filter.minRadius && tile.outerRadius < filter.minRadius) || (filter.maxRadius && tile.outerRadius > filter.maxRadius)) {
            return false;
        }

        return true;
    }
}
