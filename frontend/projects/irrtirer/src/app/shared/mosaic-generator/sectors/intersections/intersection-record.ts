import { TileTransform } from "../../models/tile-transform.model";

export class IntersectionRecord {
    constructor(public tile: TileTransform, public area: number) {}
}