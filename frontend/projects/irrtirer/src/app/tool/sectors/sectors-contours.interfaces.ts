import { Sector } from "../../core/models/mosaic-project.model";
import { Vector } from "../../core/models/point.model";

export interface EditedSectorContour {
    sector: Sector;
    selectedVertex: Vector;
}

export interface EditedSectorWithTriangulationMesh {
    sector: Sector;
    mesh: Vector[][];
}

export interface SectorListChangeEvent {
    selectedSector: Sector;
}