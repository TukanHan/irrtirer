import { createActionGroup, props } from '@ngrx/store';
import { ThemeMode } from '../../models/user-preferences.interface';

export const UserPreferencesActions = createActionGroup({
    source: 'User Preferences',
    events: {
        'Language Changed': props<{ lang: string }>(),
        'Theme Changed': props<{ theme: ThemeMode }>(),
    },
});
