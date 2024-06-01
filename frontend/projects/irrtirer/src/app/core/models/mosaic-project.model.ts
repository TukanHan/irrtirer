import { Color } from './color.model';
import { Vector } from './point.model';

export interface MosaicProject {
    config: MosaicConfig;
    tilesSets: TilesSet[];
    sectors: Sector[];
}

export interface MosaicConfig {
    base64Image: string;
    mosaicWidth: number;
}

export interface TilesSet {
    name: string;
    tiles: Tile[];
}

export interface Tile {
    id: string;
    vertices: Vector[];
    color: Color;
}

export interface Sector {
    id: string;
    name: string;
    color: Color;
    vertices: Vector[];
}