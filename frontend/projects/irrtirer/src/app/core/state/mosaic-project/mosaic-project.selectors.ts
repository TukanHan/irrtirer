import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MosaicProjectModel } from '../../models/mosaic-project.model';

export const mosaicProjectKey: string = 'mosaic-project';

export const selectMosaicProject =
  createFeatureSelector<MosaicProjectModel>('mosaicProject');

export const selectMosaicWidth = createSelector(
  selectMosaicProject,
  (state: MosaicProjectModel) => state.config.mosaicWidth
);

export const selectMosaicImage = createSelector(
  selectMosaicProject,
  (state: MosaicProjectModel) => state.config.base64Image
);

export const selectMosaicConfig = createSelector(
  selectMosaicProject,
  (state: MosaicProjectModel) => state?.config
);

export const selectIsProjectCreated = createSelector(
  selectMosaicProject,
  (state: MosaicProjectModel) => !!state
);

export const selectTilesSets = createSelector(
  selectMosaicProject,
  (state: MosaicProjectModel) => state.tilesSets
);

export const selectSectors = createSelector(
  selectMosaicProject,
  (state: MosaicProjectModel) => state?.sectors
);