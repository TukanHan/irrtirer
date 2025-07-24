import { BehaviorSubject, Observable } from 'rxjs';
import { TileTransformResult } from '../../core/models/api/api.models';
import { SectorSchema } from '../../core/models/mosaic-project.model';
import { CanvasObject } from '../../../../../active-canvas/src/public-api';
import { TileObject } from '../../shared/canvas-objects/tile-object';

export class GeneratedSectorModel {
    public schema: SectorSchema;
    public visualObjects: CanvasObject[] = [];
    public countOfSections?: number;
    public sections: GeneratedSectionModel[] = [];

    private readonly tilesSub: BehaviorSubject<GeneratedTileModel[]> = new BehaviorSubject([]);
    public readonly tiles$: Observable<GeneratedTileModel[]> = this.tilesSub.asObservable();

    private areTilesVisible: boolean = true;

    constructor(schema: SectorSchema) {
        this.schema = schema;
    }

    public addSection(generatedSection: GeneratedSectionModel): void {
        this.sections.push(generatedSection);
        generatedSection.tiles.forEach(tile => tile.tileObject.setVisibility(this.areTilesVisible));
        this.tilesSub.next(this.sections.flatMap((section) => section.tiles));
    }

    public setSectorMeshVisibility(isVisible: boolean): void {
        for (const visualObject of this.visualObjects) {
            visualObject.setVisibility(isVisible);
        }
    }

    public setSectorVisualObjects(visualObjects: CanvasObject[]): void {
        this.visualObjects.forEach((visualObject) => visualObject.removeObject());
        this.visualObjects = visualObjects;
    }

    public setTilesVisibility(areTilesVisible: boolean): void {
        this.areTilesVisible = areTilesVisible;
        const tiles: GeneratedTileModel[] = this.tilesSub.value;
        if (tiles.length) {
            tiles.forEach((tile) => tile.tileObject.setVisibility(this.areTilesVisible));
            tiles[0].tileObject.parentCanvas.redraw();
        }
    }
}

export interface GeneratedSectionModel {
    tiles: GeneratedTileModel[];
}

export interface GeneratedTileModel {
    tileObject: TileObject;
    tileTransform: TileTransformResult;
}
