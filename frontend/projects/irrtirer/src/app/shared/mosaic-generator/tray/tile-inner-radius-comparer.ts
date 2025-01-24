import { Tile } from "../models/tile";

export function tileInnerRadiusComparsion(a: Tile, b: Tile): number {
    return a.innerRadius - b.innerRadius;
}