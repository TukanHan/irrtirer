import { Injectable, signal } from '@angular/core';
import { MosaicConfig } from '../../core/models/mosaic-project.model';

export interface ImageChange {
    mosaicConfig: MosaicConfig | null;
    shouldFocus: boolean;
}

@Injectable()
export class ConfigurationService {
    private readonly _imageChange = signal<ImageChange>({ mosaicConfig: null, shouldFocus: false});

    public readonly imageChange = this._imageChange.asReadonly();

    public emitImageChange(mosaicConfig: MosaicConfig | null, shouldFocus: boolean): void {
        this._imageChange.set({ mosaicConfig, shouldFocus });
    }
}
