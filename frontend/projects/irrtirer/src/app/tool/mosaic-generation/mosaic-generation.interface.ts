import { BehaviorSubject, Observable } from 'rxjs';
import { TileTransformResult } from '../../core/models/api/api.models';
import { SectorSchema } from '../../core/models/mosaic-project.model';
import { CanvasObject } from '../../../../../active-canvas/src/public-api';
import { TileObject } from '../../shared/canvas-objects/tile-object';

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
        this.visualObjects.forEach(visualObject => visualObject.removeObject());
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
