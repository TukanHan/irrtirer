import { Tile } from "../../models/tile";
import { TileTransform } from "../../models/tile-transform.model";
import { SectionModel } from "../../sectors/section.model";
import { LayoutTilesRate } from "./layout-tiles-rate.model";

export class PossibleLayout {   
    public readonly section: SectionModel;

    public rate: number = Number.MIN_VALUE;

    public readonly layoutTilesRates: LayoutTilesRate = new LayoutTilesRate();

    public usedTilesIndexes: Set<number>;
    public tilesAvalibleForLayout: Tile[];

    constructor(section: SectionModel) {
        this.section = section;
    }

    public getTilesLayout(): TileTransform[] {
        return this.layoutTilesRates.getKeys();
    }
}