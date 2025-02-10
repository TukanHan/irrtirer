import { TileTransformResult } from '../../core/models/api/api.models';
import { SectorSchema } from '../../core/models/mosaic-project.model';
import { TileObject } from '../../shared/active-canvas/canvas-objects/tile-object';

export interface GeneratedSectorModel {
    schema: SectorSchema;
    countOfSections: number;
    sections: GeneratedSectionModel[];
}

export interface GeneratedSectionModel {
    tiles: GeneratedTileModel[];
}

export interface GeneratedTileModel {
    tileObject: TileObject;
    tileTransform: TileTransformResult;
}
