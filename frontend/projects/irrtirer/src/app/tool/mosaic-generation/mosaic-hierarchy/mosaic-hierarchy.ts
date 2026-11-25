import { Component, inject } from '@angular/core';
import { MosaicGenerationState } from '../mosaic-generation-state';
import { SectorListElem } from './sector-list-elem/sector-list-elem';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-mosaic-hierarchy',
    imports: [AsyncPipe, SectorListElem],
    templateUrl: './mosaic-hierarchy.html',
    host: { class: 'flex flex-col gap-1.5' },
})
export class MosaicHierarchy {
    protected readonly generationState = inject(MosaicGenerationState);
}
