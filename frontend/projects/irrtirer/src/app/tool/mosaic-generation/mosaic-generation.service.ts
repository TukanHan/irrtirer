import { Injectable } from '@angular/core';
import { InitMosaicGenerationRequestModel } from '../../core/models/api.models';
import { SectorSchema } from '../../core/models/mosaic-project.model';
import { Size } from '../../core/models/size.interface';

@Injectable({
    providedIn: 'root',
})
export class MosaicGenerationService {
    constructor() {}

    public buildInitMosaicRequest(base64Image: string, mosaicSize: Size, sectorsSchemas: SectorSchema[]): InitMosaicGenerationRequestModel {
        return {
            base64Image: base64Image,
            mosaicWidth: mosaicSize.width,
            sectorsGenerationParams: sectorsSchemas.map((sector) => ({
                triangulationData: {
                    polygonVertices: sector.vertices,
                    sectionMaxArea: sector.properties.sectionMaxArea,
                    sectionMinAngle: sector.properties.sectionMinAngle,
                },
                evaluationParams: sector.properties.evaluationParams,
                populationParams: sector.properties.populationParams,
                tileMargin: sector.properties.tilesMargin,
                tileMinRadius: sector.properties.minTileRadius,
                tileMaxRadius: sector.properties.maxTileRadius,
            })),
        };
    }
}
