import { BehaviorSubject, Observable } from 'rxjs';
import { TileTransformResult } from '../../core/models/api/api.models';
import { SectorSchema } from '../../core/models/mosaic-project.model';
import { TileObject } from '../../shared/active-canvas/canvas-objects/tile-object';
import { CanvasObject } from '../../shared/active-canvas/models/canvas-object.interface';

export class GeneratedSectorModel {
    schema: SectorSchema;
    visualObjects: CanvasObject[] = [];
    countOfSections?: number;
    sections: GeneratedSectionModel[] = [];

    tilesSub: BehaviorSubject<GeneratedTileModel[]> = new BehaviorSubject([]);
    tiles$: Observable<GeneratedTileModel[]> = this.tilesSub.asObservable();

    constructor(schema: SectorSchema) {
        this.schema = schema;
    }

    public addSection(generatedSection: GeneratedSectionModel): void {
        this.sections.push(generatedSection);
        this.tilesSub.next(this.sections.flatMap((section) => section.tiles));
    }

    public setSectorMeshVisability(isVisible: boolean): void {
        for (const visualObject of this.visualObjects) {
            visualObject.isVisible = isVisible;
        }
    }

    public setSectorVisualObjects(visualObjects: CanvasObject[]): void {
        this.visualObjects = visualObjects;
    }
}

export interface GeneratedSectionModel {
    tiles: GeneratedTileModel[];
}

export interface GeneratedTileModel {
    tileObject: TileObject;
    tileTransform: TileTransformResult;
}
