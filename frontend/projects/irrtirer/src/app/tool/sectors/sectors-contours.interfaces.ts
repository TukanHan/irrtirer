import { Triangle } from '../../core/models/math/triangle.model';
import { Vector } from '../../core/models/math/vector.model';
import { SectorSchema } from '../../core/models/mosaic-project.model';

export interface EditedSectorContour {
    sector: SectorSchema;
    selectedVertex: Vector;
}

export interface EditedSectorWithTriangulationMesh {
    sector: SectorSchema;
    mesh: Triangle[] | null;
    contour: Vector[] | null;
}

export interface SectorListChangeEvent {
    selectedSector: SectorSchema;
}
