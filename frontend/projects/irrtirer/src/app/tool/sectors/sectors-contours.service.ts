import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { EditedSectorContour, EditedSectorWithTriangulationMesh, SectorListChangeEvent } from './sectors-contours.interfaces';

@Injectable({
    providedIn: 'root',
})
export class SectorsContoursService {
    private readonly sectorForContourEditionChanged: Subject<EditedSectorContour | null> =
        new BehaviorSubject<EditedSectorContour | null>(null);

    public readonly sectorForContourEdition$: Observable<EditedSectorContour | null> =
        this.sectorForContourEditionChanged.asObservable();

    private readonly sectorListChanged: Subject<SectorListChangeEvent> = new BehaviorSubject(null);

    public readonly sectorListChange$: Observable<SectorListChangeEvent> = this.sectorListChanged.asObservable();

    private readonly sectorForPropertyEditionChanged: Subject<EditedSectorWithTriangulationMesh | null> = new BehaviorSubject(null);

    public readonly sectorForPropertyEdition$: Observable<EditedSectorWithTriangulationMesh | null> =
        this.sectorForPropertyEditionChanged.asObservable();

    constructor() {}

    public emitEditedSectorContour(sectorContour: EditedSectorContour): void {
        this.sectorForContourEditionChanged.next(sectorContour);
    }

    public emitEditedSectorProperty(sector: EditedSectorWithTriangulationMesh): void {
        this.sectorForPropertyEditionChanged.next(sector);
    }

    public emitSectorListChanged(sectorListChangeEvent: SectorListChangeEvent): void {
        this.sectorListChanged.next(sectorListChangeEvent);
    }
}
