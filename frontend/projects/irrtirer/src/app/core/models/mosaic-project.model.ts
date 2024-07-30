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
    properties: SectorProperties;
}

export interface SectorProperties {
    sectionMaxArea: number;
    sectionMinAngle: number
    minTileRadius?: number;
    maxTileRadius?: number;
    tilesMargin: number;
    evaluationParams: SectorEvaluationParams;
    populationParams: SectorPopulationParams;
}

export interface SectorEvaluationParams {
    singleSectionPopulation: number,
    overlappingAreaOutsideSector: number,
    additionalPopulationOfNeighboringSectors: number,
    overlappingNotPopulatedSections: number,
    tileColorMismatch: number,
}

export interface SectorPopulationParams {
    initialPopulationSize: number,
    countOfTriesToInsertTile: number,
    countOfRandomingTrianglePosition: number,
    countOfColorMatchingAttempts: number,
    iterationsCount: number,
    populationSize: number,
}