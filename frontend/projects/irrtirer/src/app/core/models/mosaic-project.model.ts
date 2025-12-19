import { Vector } from './math/vector.model';

export interface MosaicProjectModel {
    config: MosaicConfig;
    tilesSets: TilesSet[];
    sectors: SectorSchema[];
}

export interface MosaicConfig {
    base64Image: string;
    mosaicWidth: number;
}

type TileSetSource = 'generated';

export interface TilesSet {
    name: string;
    source: TileSetSource;
    tiles: TileModel[];
}

export interface GeneratedTilesSet extends TilesSet {
    minRadius: number;
    maxRadius: number;
}

export interface TileModel {
    id: string;
    vertices: Vector[];
    color: string;
}

export interface SectorSchema {
    id: string;
    name: string;
    color: string;
    vertices: Vector[];
    properties: SectorSchemaProperties;
}

export interface SectorSchemaProperties {
    sectionMaxArea: number;
    sectionMinAngle: number;
    minTileRadius: number;
    maxTileRadius: number;
    tilesMargin: number;
    evaluationParams: SectorSchemaEvaluationParams;
    populationParams: SectorSchemaPopulationParams;
}

export interface SectorSchemaEvaluationParams {
    singleSectionPopulation: number;
    overlappingAreaOutsideSector: number;
    additionalPopulationOfNeighboringSectors: number;
    overlappingNotPopulatedSections: number;
    tileColorMismatch: number;
}

export interface SectorSchemaPopulationParams {
    initialPopulationSize: number;
    countOfTriesToInsertTile: number;
    countOfTrianglePositionDraws: number;
    countOfColorMatchingAttempts: number;
    iterationsCount: number;
    populationSize: number;
}
