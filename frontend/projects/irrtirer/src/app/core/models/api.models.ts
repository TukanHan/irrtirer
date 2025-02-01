import { EvaluationParams } from "../../shared/mosaic-generator/sectors/generation-params/evaluation-params.interface";
import { PopulationParams } from "../../shared/mosaic-generator/sectors/generation-params/population-params.interface";
import { Vector } from "./vector.model";

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

export class Triangle {
    a: Vector;
    b: Vector; 
    c: Vector;

    public static restore(obj: Triangle): void {
        Vector.restore(obj.a);
        Vector.restore(obj.b);
        Vector.restore(obj.c);
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