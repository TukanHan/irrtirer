import { Injectable } from '@angular/core';
import { InitMosaicGenerationRequestModel, SectorTriangulationMeshPartsModel } from '../../core/models/api/api.models';
import { SectorSchema } from '../../core/models/mosaic-project.model';
import { Size } from '../../core/models/math/size.interface';
import { GeneratedSectorModel, GeneratedTileModel } from './mosaic-generation.interface';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MosaicGenerationService {
    public sectorsGenerationInfo: Map<string, GeneratedSectorModel> = new Map();

    private readonly sectionGeneratedSub: Subject<GeneratedSectorModel[]> = new Subject();
    
    public readonly sectionGenerated$: Observable<GeneratedSectorModel[]> = this.sectionGeneratedSub.asObservable();

    public buildInitMosaicRequest(base64Image: string, mosaicSize: Size, sectorsSchemas: SectorSchema[]): InitMosaicGenerationRequestModel {
        return {
            base64Image: base64Image,
            mosaicWidth: mosaicSize.width,
            sectorsGenerationParams: sectorsSchemas.map((sector) => ({
                id: sector.id,
                tileMargin: sector.properties.tilesMargin,
                tileMinRadius: sector.properties.minTileRadius,
                tileMaxRadius: sector.properties.maxTileRadius,
                triangulationData: {
                    polygonVertices: sector.vertices,
                    sectionMaxArea: sector.properties.sectionMaxArea,
                    sectionMinAngle: sector.properties.sectionMinAngle,
                },
                evaluationParams: sector.properties.evaluationParams,
                populationParams: sector.properties.populationParams,
            })),
        };
    }

    public fillSectorsGenerationInfo(sectorsSchemas: SectorSchema[], sectorsTriangulations: SectorTriangulationMeshPartsModel[]): void {
        for (let i = 0; i < sectorsSchemas.length; ++i) {
            const sector: SectorSchema = sectorsSchemas[i];

            const value: GeneratedSectorModel = { 
                schema: sector,
                countOfSections: sectorsTriangulations[i].parts.flatMap(x => x.triangles).length,
                sections: []
            };

            this.sectorsGenerationInfo.set(sector.id, value);
        }
    }

    public addSectionTilesObjects(sectorId: string, sectionTiles: GeneratedTileModel[]): void {
        const sector = this.sectorsGenerationInfo.get(sectorId);
        sector.sections.push({ tiles: sectionTiles });
        this.sectionGeneratedSub.next(Array.from(this.sectorsGenerationInfo.values()));
    }
}
