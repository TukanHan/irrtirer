import { Triangle } from "../../core/models/api.models";
import { SectorSchema } from "../../core/models/mosaic-project.model";
import { Vector } from "../../core/models/vector.model";

export interface EditedSectorContour {
    sector: SectorSchema;
    selectedVertex: Vector;
}

export interface EditedSectorWithTriangulationMesh {
    sector: SectorSchema;
    mesh: Triangle[];
    contout: Vector[];
}

export interface SectorListChangeEvent {
    selectedSector: SectorSchema;
}