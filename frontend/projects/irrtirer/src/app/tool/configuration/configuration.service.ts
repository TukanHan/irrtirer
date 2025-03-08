import { Injectable } from '@angular/core';
import { MosaicConfig } from '../../core/models/mosaic-project.model';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ImageChange {
    mosaicConfig: MosaicConfig;
    shouldFocus: boolean;
}

@Injectable()
export class ConfigurationService {
    private readonly imageChangeSub: BehaviorSubject<ImageChange> = new BehaviorSubject(null);

    public imageChange$: Observable<ImageChange> = this.imageChangeSub.asObservable();

    public emitImageChange(mosaicConfig: MosaicConfig, shouldFocus: boolean): void {
        this.imageChangeSub.next({ mosaicConfig, shouldFocus });
    }
}
