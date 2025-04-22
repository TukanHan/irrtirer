import { Injectable } from '@angular/core';
import { MosaicConfig } from '../../core/models/mosaic-project.model';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ImageChange {
    mosaicConfig: MosaicConfig | null;
    shouldFocus: boolean;
}

@Injectable()
export class ConfigurationService {
    private readonly imageChangeSub = new BehaviorSubject<ImageChange>({ mosaicConfig: null, shouldFocus: false});

    public readonly imageChange$: Observable<ImageChange> = this.imageChangeSub.asObservable();

    public emitImageChange(mosaicConfig: MosaicConfig | null, shouldFocus: boolean): void {
        this.imageChangeSub.next({ mosaicConfig, shouldFocus });
    }
}
