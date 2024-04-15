import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { MosaicProject, TilesSet } from '../../models/mosaic-project.model';

export const MosaicProjectActions = createActionGroup({
    source: 'Mosaic Project',
    events: {
        'Project Created': props<{ project: MosaicProject }>(),
        'Project Canceled': emptyProps(),
        'Mosaic Width Changed': props<{ width: number }>(),
        'Tiles Set Added': props<{ tilesSet: TilesSet }>(),
        'Tiles Set Removed': props<{ removedTilesSet: TilesSet }>(),
    },
});
