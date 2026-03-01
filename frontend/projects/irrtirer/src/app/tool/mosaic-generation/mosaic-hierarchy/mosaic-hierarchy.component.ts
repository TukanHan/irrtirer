import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MosaicGenerationService } from '../mosaic-generation.service';
import { SectorListElemComponent } from './sector-list-elem/sector-list-elem.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-mosaic-hierarchy',
    imports: [AsyncPipe, SectorListElemComponent],
    templateUrl: './mosaic-hierarchy.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'flex flex-col gap-1.5' },
})
export class MosaicHierarchyComponent {
    protected readonly service = inject(MosaicGenerationService);
}
