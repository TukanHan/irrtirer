import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { EditedSectorContour, SectorListChangeEvent } from './sectors-contours.interfaces';

@Injectable({
    providedIn: 'root',
})
export class SectorsContoursService {
    private readonly editedSectorContourChanged: Subject<EditedSectorContour | null> =
        new BehaviorSubject<EditedSectorContour | null>(null);

    public readonly editedSectorContour$: Observable<EditedSectorContour | null> =
        this.editedSectorContourChanged.asObservable();

    private readonly sectorListChanged: Subject<SectorListChangeEvent> = new BehaviorSubject(null);

    public readonly sectorListChange$: Observable<SectorListChangeEvent> = this.sectorListChanged.asObservable();

    constructor() {}

    public emitEditedSectorContour(sectorContour: EditedSectorContour | null): void {
        this.editedSectorContourChanged.next(sectorContour);
    }

    public emitSectorListChanged(sectorListChangeEvent: SectorListChangeEvent): void {
        this.sectorListChanged.next(sectorListChangeEvent);
    }
}
