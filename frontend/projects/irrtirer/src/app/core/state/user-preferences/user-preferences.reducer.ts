import { createReducer, on } from '@ngrx/store';
import { UserPreferences } from '../../models/user-preferences.interface';
import { UserPreferencesActions } from './user-preferences.actions';

export const userPreferencesReducer = createReducer<UserPreferences>(
    {},
    on(UserPreferencesActions.languageChanged, (state, { lang }) => ({
        ...state,
        lang
    }))
);
