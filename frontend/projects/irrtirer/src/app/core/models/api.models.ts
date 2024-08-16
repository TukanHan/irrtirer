import { Vector } from "./point.model";

export interface SectorTriangulationMeshPartsModel {
    parts: SectorTriangulationMeshModel[];
}

export interface SectorTriangulationMeshModel {
    triangles: Vector[][];
}

export interface SectorTriangulationRequestModel {
    polygonVertices: Vector[];
    sectionMaxArea: number;
    sectionMinAngle: number;
}