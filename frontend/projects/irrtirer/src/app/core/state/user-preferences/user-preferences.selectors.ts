import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserPreferences } from '../../models/user-preferences.interface';

export const userPreferencesKey: string = 'user-preferences';

export const selectUserPreferences = createFeatureSelector<UserPreferences>('userPreferences');

export const selectUserLang = createSelector(selectUserPreferences, (state: UserPreferences) => state.lang);
