import { Vector } from "./vector.model";

export class SectorTriangulationMeshPartsModel {
    parts: SectorTriangulationMeshModel[];

    public static restore(obj: SectorTriangulationMeshPartsModel): void {
        obj.parts.forEach(part => SectorTriangulationMeshModel.restore(part));
    }
}

export class SectorTriangulationMeshModel {
    triangles: Vector[][];

    public static restore(obj: SectorTriangulationMeshModel): void {
        obj.triangles.forEach((triangle) => triangle.forEach(vertex => Vector.restore(vertex)));
    }
}

export interface SectorTriangulationRequestModel {
    polygonVertices: Vector[];
    sectionMaxArea: number;
    sectionMinAngle: number;
}