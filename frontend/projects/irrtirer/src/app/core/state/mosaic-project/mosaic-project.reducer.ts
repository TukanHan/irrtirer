import { createReducer, on } from '@ngrx/store';
import { MosaicProjectActions } from './mosaic-project.actions';
import { MosaicProjectModel } from '../../models/mosaic-project.model';
import { ArrayHelpers } from '../../helpers/array-helpers';

export const mosaicProjectReducer = createReducer<MosaicProjectModel | null>(
    null,
    on(MosaicProjectActions.projectCreated, (_state, { project }) => ({
        ...project,
    })),
    on(MosaicProjectActions.projectCanceled, (): null => null),
    on(MosaicProjectActions.mosaicWidthChanged, (state, { width }) => ({
        ...state!,
        config: { ...state!.config, mosaicWidth: width },
    })),
    on(MosaicProjectActions.sectorModified, (state, { modifiedSector }) => ({
        ...state!,
        sectors: ArrayHelpers.addOrUpdate([...state!.sectors], modifiedSector, (x) => x.id === modifiedSector.id),
    })),
    on(MosaicProjectActions.sectorRemoved, (state, { sector }) => ({
        ...state!,
        sectors: [...state!.sectors.filter((x) => x.id !== sector.id)],
    })),
    on(MosaicProjectActions.sectorShifted, (state, { prevIndex, newIndex }) => ({
        ...state!,
        sectors: ArrayHelpers.moveElemInArray([...state!.sectors], prevIndex, newIndex),
    })),
    on(MosaicProjectActions.tilesSetCommitted, (state, { tilesSet }) => ({
        ...state!,
        tilesSets: [...state!.tilesSets.filter((x) => x.id !== tilesSet.id), tilesSet],
    })),
    on(MosaicProjectActions.tilesSetRemoved, (state, { removedTilesSet }) => ({
        ...state!,
        tilesSets: state!.tilesSets.filter((tilesSet) => tilesSet !== removedTilesSet),
    }))
);
