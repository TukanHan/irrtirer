import { EvaluationParams } from "./evaluation-params.interface";
import { PopulationParams } from "./population-params.interface";
import { Vector } from "../math/vector.model";
import { Triangle } from "../math/triangle.model";

export class SectorTriangulationMeshPartsModel {
    public readonly sectorId: string;
    public readonly parts: SectorTriangulationMeshModel[];

    public static restore(obj: SectorTriangulationMeshPartsModel): void {
        obj.parts.forEach(part => SectorTriangulationMeshModel.restore(part));
    }
}

export class SectorTriangulationMeshModel {
    public readonly triangles: Triangle[];
    public readonly contour: Vector[];

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
    id: string;
    tileMinRadius: number;
    tileMaxRadius: number;
    tileMargin: number;
    triangulationData: SectorTriangulationRequestModel;
    evaluationParams: EvaluationParams;
    populationParams: PopulationParams;
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

export class SectionGenerationResult {
    public readonly sectorId: string;
    public readonly tilesTransforms: TileTransformResult[];

    public static restore(obj: SectionGenerationResult): void {
        Object.setPrototypeOf(obj, SectionGenerationResult);
        obj.tilesTransforms.forEach(tileTransform => TileTransformResult.restore(tileTransform));
    }
}

export class TileTransformResult {
    public readonly tileId: string;
    public readonly position: Vector;
    public readonly angle: number;

    public static restore(obj: TileTransformResult): void {
        Object.setPrototypeOf(obj, TileTransformResult);
        Vector.restore(obj.position);
    }
}