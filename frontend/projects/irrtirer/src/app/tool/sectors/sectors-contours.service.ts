import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { EditedSectorContour, EditedSectorWithTriangulationMesh, SectorListChangeEvent } from './sectors-contours.interfaces';
import { SectorSchema } from '../../core/models/mosaic-project.model';
import { RandomHelper } from '../../core/helpers/random-helper';
import Color from 'color';
import { IVector } from '../../../../../active-canvas/src/public-api';

@Injectable({
    providedIn: 'root',
})
export class SectorsContoursService {
    private readonly sectorForContourEditionChanged = new BehaviorSubject<EditedSectorContour | null>(null);

    public readonly sectorForContourEdition$ = this.sectorForContourEditionChanged.asObservable();

    private readonly sectorListChanged = new BehaviorSubject<SectorListChangeEvent | null>(null);

    public readonly sectorListChange$ = this.sectorListChanged.asObservable();

    private readonly sectorForPropertyEditionChanged = new BehaviorSubject<EditedSectorWithTriangulationMesh | null>(null);

    public readonly sectorForPropertyEdition$ = this.sectorForPropertyEditionChanged.asObservable();

    private readonly canvasClickedSub = new Subject<IVector>();

    public readonly canvasClicked$ = this.canvasClickedSub.asObservable();

    public emitEditedSectorContour(sectorContour: EditedSectorContour | null): void {
        this.sectorForContourEditionChanged.next(sectorContour);
    }

    public emitEditedSectorProperty(sector: EditedSectorWithTriangulationMesh | null): void {
        this.sectorForPropertyEditionChanged.next(sector);
    }

    public emitSectorListChanged(sectorListChangeEvent: SectorListChangeEvent): void {
        this.sectorListChanged.next(sectorListChangeEvent);
    }

    public emitCanvasClicked(point: IVector): void {
        this.canvasClickedSub.next(point);
    }

    public static createNewSector(): SectorSchema {
        return {
            id: crypto.randomUUID(),
            name: '',
            color: Color({ h: RandomHelper.nextFloat(0, 360), s: 75, v: 95 }).hex(),
            vertices: [],
            properties: {
                sectionMaxArea: 5,
                sectionMinAngle: 35,
                maxTileRadius: 4,
                minTileRadius: 0,
                tilesMargin: 0.1,
                evaluationParams: {
                    singleSectionPopulation: 2,
                    overlappingAreaOutsideSector: -2,
                    additionalPopulationOfNeighboringSectors: 4,
                    overlappingNotPopulatedSections: -1,
                    tileColorMismatch: -2,
                },
                populationParams: {
                    initialPopulationSize: 100,
                    countOfTriesToInsertTile: 30,
                    countOfTrianglePositionDraws: 30,
                    countOfColorMatchingAttempts: 40,
                    iterationsCount: 100,
                    populationSize: 10,
                },
            },
        };
    }
}
