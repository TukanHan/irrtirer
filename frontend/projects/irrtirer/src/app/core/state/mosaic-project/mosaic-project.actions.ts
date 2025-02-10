import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { MosaicProjectModel, SectorSchema, TilesSet } from '../../models/mosaic-project.model';

export const MosaicProjectActions = createActionGroup({
    source: 'Mosaic Project',
    events: {
        'Project Created': props<{ project: MosaicProjectModel }>(),
        'Project Canceled': emptyProps(),
        'Mosaic Width Changed': props<{ width: number }>(),

        'Sector Modified': props<{ modifiedSector: SectorSchema }>(),
        'Sector Removed': props<{ sector: SectorSchema }>(),
        'Sector Shifted': props<{ prevIndex: number, newIndex: number }>(),

        'Tiles Set Added': props<{ tilesSet: TilesSet }>(),
        'Tiles Set Removed': props<{ removedTilesSet: TilesSet }>(),
    },
});
