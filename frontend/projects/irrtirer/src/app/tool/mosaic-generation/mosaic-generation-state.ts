import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { InitMosaicGenerationRequestModel, SectorTriangulationMeshPartsModel } from '../../core/models/api/api.models';
import { Size } from '../../core/models/math/size.interface';
import { SectorSchema } from '../../core/models/mosaic-project.model';
import { GeneratedSectorModel, GeneratedTileModel } from './mosaic-generation.interface';

@Injectable()
export class MosaicGenerationState {
    private readonly sectorsInfo = new Map<string, GeneratedSectorModel>();

    private readonly sectorsSub = new Subject<GeneratedSectorModel[]>();

    public readonly sectors$: Observable<GeneratedSectorModel[]> = this.sectorsSub.asObservable();

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

    public initGeneratedSectorsData(sectorsSchemas: SectorSchema[]): void {
        for (const sectorSchema of sectorsSchemas) {
            this.sectorsInfo.set(sectorSchema.id, new GeneratedSectorModel(sectorSchema));
        }

        this.sectorsSub.next(Array.from(this.sectorsInfo.values()));
    }

    public fillSectorsGenerationInfo(sectorsTriangulations: SectorTriangulationMeshPartsModel[]): void {
        for (const sectorTriangulation of sectorsTriangulations) {
            const generatedSector = this.sectorsInfo.get(sectorTriangulation.sectorId)!;
            generatedSector.countOfSections = sectorTriangulation.parts.flatMap((x) => x.triangles).length;
        }

        this.sectorsSub.next(Array.from(this.sectorsInfo.values()));
    }

    public addSectionTilesObjects(sectorId: string, sectionTiles: GeneratedTileModel[]): void {
        const sector = this.sectorsInfo.get(sectorId)!;
        sector.addSection({ tiles: sectionTiles });
    }

    public getSectorById(sectorId: string): GeneratedSectorModel {
        return this.sectorsInfo.get(sectorId)!;
    }

    public getSectors(): GeneratedSectorModel[] {
        return Array.from(this.sectorsInfo.values());
    }
}
