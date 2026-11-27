import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MosaicGenerationState } from '../mosaic-generation-state';
import { SectorListElem } from './sector-list-elem/sector-list-elem';

@Component({
    selector: 'app-mosaic-hierarchy',
    imports: [AsyncPipe, SectorListElem],
    template: `
        @for (sector of this.generationState.sectors$ | async; track $index) {
            <app-sector-list-elem [sector]="sector" />
        }
    `,
    host: { class: 'flex flex-col gap-1.5' },
})
export class MosaicHierarchy {
    protected readonly generationState = inject(MosaicGenerationState);
}
