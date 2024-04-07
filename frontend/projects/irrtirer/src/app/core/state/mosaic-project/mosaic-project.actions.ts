import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { MosaicProject } from '../../models/mosaic-project.model';

export const MosaicProjectActions = createActionGroup({
    source: 'Mosaic Project',
    events: {
        'Project Created': props<{ project: MosaicProject }>(),
        'Project Canceled': emptyProps(),
        'Mosaic Width Changed': props<{ width: number }>(),
    },
});
