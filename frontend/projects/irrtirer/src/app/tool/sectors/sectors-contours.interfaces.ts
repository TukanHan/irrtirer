import { SectorSchema } from "../../core/models/mosaic-project.model";
import { Vector } from "../../core/models/math/vector.model";
import { Triangle } from "../../core/models/math/triangle.model";

export interface EditedSectorContour {
    sector: SectorSchema;
    selectedVertex: Vector;
}

export interface EditedSectorWithTriangulationMesh {
    sector: SectorSchema;
    mesh: Triangle[];
    contour: Vector[];
}

export interface SectorListChangeEvent {
    selectedSector: SectorSchema;
}