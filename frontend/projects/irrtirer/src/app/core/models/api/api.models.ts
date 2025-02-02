import { EvaluationParams } from "./evaluation-params.interface";
import { PopulationParams } from "./population-params.interface";
import { Vector } from "../math/vector.model";
import { Triangle } from "../math/triangle.model";

export class SectorTriangulationMeshPartsModel {
    parts: SectorTriangulationMeshModel[];

    public static restore(obj: SectorTriangulationMeshPartsModel): void {
        obj.parts.forEach(part => SectorTriangulationMeshModel.restore(part));
    }
}

export class SectorTriangulationMeshModel {
    triangles: Triangle[];
    contour: Vector[];

    public static restore(obj: SectorTriangulationMeshModel): void {
        obj.triangles.forEach((triangle) => Triangle.restore(triangle));
        obj.contour.forEach((vertex) => Vector.restore(vertex));
    }
}

export interface InitMosaicGenerationRequestModel {
    base64Image: string;
    mosaicWidth: number;
    sectorsGenerationParams: SectorGenerationParams[];
}

export interface SectorGenerationParams {
    triangulationData: SectorTriangulationRequestModel;
    evaluationParams: EvaluationParams;
    populationParams: PopulationParams;

    tileMinRadius: number;
    tileMaxRadius: number;
    tileMargin: number;
}

export interface SectorTriangulationRequestModel {
    polygonVertices: Vector[];
    sectionMaxArea: number;
    sectionMinAngle: number;
}

export interface TileRequestModel {
    id: string;
    color: string;
    vertices: Vector[]
}

export interface TileTransformResult {
    tileId: string;
    position: Vector;
    angle: number;
}