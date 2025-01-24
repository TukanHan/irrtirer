import { SectorSchema } from "../../core/models/mosaic-project.model";
import { Vector } from "../../core/models/vector.model";

export interface EditedSectorContour {
    sector: SectorSchema;
    selectedVertex: Vector;
}

export interface EditedSectorWithTriangulationMesh {
    sector: SectorSchema;
    mesh: Vector[][];
}

export interface SectorListChangeEvent {
    selectedSector: SectorSchema;
}