import { Color } from './color.model';
import { Vector } from './vector.model';

export interface MosaicProjectModel {
    config: MosaicConfig;
    tilesSets: TilesSet[];
    sectors: SectorSchema[];
}

export interface MosaicConfig {
    base64Image: string;
    mosaicWidth: number;
}

export interface TilesSet {
    name: string;
    tiles: TileModel[];
}

export interface TileModel {
    id: string;
    vertices: Vector[];
    color: Color;
}

export interface SectorSchema {
    id: string;
    name: string;
    color: Color;
    vertices: Vector[];
    properties: SectorSchemaProperties;
}

export interface SectorSchemaProperties {
    sectionMaxArea: number;
    sectionMinAngle: number
    minTileRadius: number;
    maxTileRadius: number;
    tilesMargin: number;
    evaluationParams: SectorSchemaEvaluationParams;
    populationParams: SectorSchemaPopulationParams;
}

export interface SectorSchemaEvaluationParams {
    singleSectionPopulation: number,
    overlappingAreaOutsideSector: number,
    additionalPopulationOfNeighboringSectors: number,
    overlappingNotPopulatedSections: number,
    tileColorMismatch: number,
}

export interface SectorSchemaPopulationParams {
    initialPopulationSize: number,
    countOfTriesToInsertTile: number,
    countOfRandomingTrianglePosition: number,
    countOfColorMatchingAttempts: number,
    iterationsCount: number,
    populationSize: number,
}