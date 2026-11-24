import { Component, inject } from '@angular/core';
import { MosaicGenerationState } from '../mosaic-generation-state';
import { SectorListElemComponent } from './sector-list-elem/sector-list-elem.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-mosaic-hierarchy',
    imports: [AsyncPipe, SectorListElemComponent],
    templateUrl: './mosaic-hierarchy.component.html',
    host: { class: 'flex flex-col gap-1.5' },
})
export class MosaicHierarchyComponent {
    protected readonly service = inject(MosaicGenerationState);
}
