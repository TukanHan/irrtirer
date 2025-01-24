import { Injectable } from '@angular/core';
import { SectorTriangulationMeshModel, SectorTriangulationMeshPartsModel } from '../../core/models/api.models';
import { SectorModel } from '../../shared/mosaic-generator/sectors/sector.model';
import { SectionModel } from '../../shared/mosaic-generator/sectors/section.model';
import { Triangle } from '../../shared/mosaic-generator/models/triangle.model';
import { TriangulationMeshHelper } from '../../core/helpers/polygon/triangulation-mesh-helper';
import { MosaicSetModel } from '../../shared/mosaic-generator/sectors/mosaic-set.model';
import { SectorSchema } from '../../core/models/mosaic-project.model';
import { SeparatingAxisTheorem } from '../../shared/mosaic-generator/helpers/polygon-helpers/separating-axis-theorem';

@Injectable({
    providedIn: 'root',
})
export class SectorsMapperService {
    public static mapMosaicSet(sectorsSchemas: SectorSchema[], sectorsTriangulations: SectorTriangulationMeshPartsModel[]): MosaicSetModel {
        const allSections: SectionModel[] = [];
        const sectors: SectorModel[] = [];

        for (let i = sectorsTriangulations.length - 1; i >= 0; --i) {
            for (const sectorPart of sectorsTriangulations[i].parts) {
                const sector = this.mapSector(sectorPart, sectorsSchemas[i]);
                sectors.push(sector);
                allSections.push(...sector.sections);
            }
        }

        for (const section of allSections) {
            section.neighbours = allSections.filter((s) => s !== section && this.areNeighborlyTriangles(s, section));
        }

        return {
            sectors: sectors,
        };
    }

    private static mapSector(sectorPart: SectorTriangulationMeshModel, sectorSchema: SectorSchema): SectorModel {
        const meshTriangles: Triangle[] = sectorPart.triangles.map((t) => new Triangle(t[0], t[1], t[2]));

        const sector = new SectorModel(sectorSchema.id);
        sector.evaluationParams = sectorSchema.properties.evaluationParams;
        sector.populationParams = sectorSchema.properties.populationParams;
        sector.tileMaxRadius = sectorSchema.properties.maxTileRadius;
        sector.tileMinRadius = sectorSchema.properties.minTileRadius;
        sector.tileMargin = sectorSchema.properties.tilesMargin;
        sector.contour = TriangulationMeshHelper.getMeshOuterContour(meshTriangles);

        for (const meshTriangle of meshTriangles) {
            const section = new SectionModel(meshTriangle, sector);
            sector.sections.push(section);
        }

        return sector;
    }

    private static areNeighborlyTriangles(a: SectionModel, b: SectionModel): boolean {
        const distance: number = Math.max(a.parent.tileMaxRadius, b.parent.tileMaxRadius);
        return SeparatingAxisTheorem.getMinDistance(a.getWorldVertices(), b.getWorldVertices()) < distance;
    }
}
