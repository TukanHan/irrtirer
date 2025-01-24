import { Observable, Subject } from 'rxjs';
import { SectorOrderedArgs } from './sector-ordered-args.interface';
import { SectionOrderedArgs } from './section-ordered-args.interface';
import { MosaicSetOrderedArgs } from './mosaic-set-ordered-args.interface';
import { MosaicSetModel } from '../sectors/mosaic-set.model';
import { SectionModel } from '../sectors/section.model';
import { SectorModel } from '../sectors/sector.model';

export class EventBus {
    private readonly mosaicSetOrderingProgress: Subject<MosaicSetOrderedArgs> = new Subject<MosaicSetOrderedArgs>();
    public mosaicSetOrderingProgress$: Observable<MosaicSetOrderedArgs> = this.mosaicSetOrderingProgress.asObservable();

    private readonly sectorOrderingProgress: Subject<SectorOrderedArgs> = new Subject<SectorOrderedArgs>();
    public sectorOrderingProgress$: Observable<SectorOrderedArgs> = this.sectorOrderingProgress.asObservable();

    private readonly sectionOrderingProgress: Subject<SectionOrderedArgs> = new Subject<SectionOrderedArgs>();
    public sectionOrderingProgress$: Observable<SectionOrderedArgs> = this.sectionOrderingProgress.asObservable();

    public emitMosaicSetOrderingEnd(mosaicSet: MosaicSetModel): void {
        this.mosaicSetOrderingProgress.next({ mosaicSet });
    }

    public emitSectorOrderingEnd(sectorModel: SectorModel): void {
        this.sectorOrderingProgress.next({ sector: sectorModel });
    }

    public emitSectionOrderingEnd(sectionModel: SectionModel): void {
        this.sectionOrderingProgress.next({ tiles: sectionModel.directTiles });
    }
}
