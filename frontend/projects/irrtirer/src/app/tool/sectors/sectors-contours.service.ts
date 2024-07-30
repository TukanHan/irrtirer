import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { EditedSectorContour, SectorListChangeEvent } from './sectors-contours.interfaces';
import { Sector } from '../../core/models/mosaic-project.model';

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

    private readonly sectorForPropertyEditionChanged: Subject<Sector | null> = new BehaviorSubject<Sector | null>(null);

    public readonly sectorForPropertyEdition$: Observable<Sector | null> = this.sectorForPropertyEditionChanged.asObservable();

    constructor() {}

    public emitEditedSectorContour(sectorContour: EditedSectorContour | null): void {
        this.sectorForContourEditionChanged.next(sectorContour);
    }

    public emitEditedSectorProperty(sector: Sector): void {
        this.sectorForPropertyEditionChanged.next(sector);
    }

    public emitSectorListChanged(sectorListChangeEvent: SectorListChangeEvent): void {
        this.sectorListChanged.next(sectorListChangeEvent);
    }
}
