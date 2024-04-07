import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MosaicProject } from '../../models/mosaic-project.model';

export const mosaicProjectKey: string = 'mosaic-project';

export const selectMosaicProject =
  createFeatureSelector<MosaicProject>('mosaicProject');

export const selectMosaicWidth = createSelector(
  selectMosaicProject,
  (state: MosaicProject) => state.config.mosaicWidth
);

export const selectMosaicImage = createSelector(
  selectMosaicProject,
  (state: MosaicProject) => state.config.base64Image
);
