import { createReducer, on } from '@ngrx/store';
import { MosaicProjectActions } from './mosaic-project.actions';
import { MosaicProject } from '../../models/mosaic-project.model';

export const mosaicProjectReducer = createReducer<MosaicProject | null>(
    null,
    on(MosaicProjectActions.projectCreated, (state, { project }) => ({
        ...project,
    })),
    on(MosaicProjectActions.projectCanceled, (state) => null),
    on(MosaicProjectActions.mosaicWidthChanged, (state, { width }) => ({
        ...state,
        config: { ...state!.config, mosaicWidth: width },
    })),
    on(MosaicProjectActions.tilesSetAdded, (state, { tilesSet }) => ({
        ...state,
        tilesSets: [...state.tilesSets, tilesSet],
    })),
    on(MosaicProjectActions.tilesSetRemoved, (state, { removedTilesSet }) => ({
        ...state,
        tilesSets: state.tilesSets.filter((tilesSet) => tilesSet !== removedTilesSet),
    }))
);
