import { BehaviorSubject, Observable } from 'rxjs';
import { TileTransformResult } from '../../core/models/api/api.models';
import { SectorSchema } from '../../core/models/mosaic-project.model';
import { TileObject } from '../../shared/active-canvas/canvas-objects/tile-object';

export class GeneratedSectorModel {
    schema: SectorSchema;
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
}

export interface GeneratedSectionModel {
    tiles: GeneratedTileModel[];
}

export interface GeneratedTileModel {
    tileObject: TileObject;
    tileTransform: TileTransformResult;
}
