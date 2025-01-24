import { Tile } from '../models/tile';

export class TileTray {
    private readonly avalibleTiles: Set<Tile>;
    private readonly unavalibleTiles: Set<Tile>;

    public constructor(tiles: Iterable<Tile>) {
        this.avalibleTiles = new Set(tiles);
        this.unavalibleTiles = new Set();
    }

    public getAvalibleTilesForMosaicSet(): Iterable<Tile> {
        return this.avalibleTiles;
    }

    public removeTiles(tiles: Iterable<Tile>): void {
        for (const tile of tiles) {
            this.avalibleTiles.delete(tile);
            this.unavalibleTiles.add(tile);
        }
    }

    public static restore(obj: TileTray): TileTray {
        Object.setPrototypeOf(obj, TileTray.prototype);
        return obj;
    }
}
