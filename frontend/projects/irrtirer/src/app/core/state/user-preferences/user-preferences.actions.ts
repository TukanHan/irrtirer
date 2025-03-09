import { createActionGroup, props } from '@ngrx/store';

export const UserPreferencesActions = createActionGroup({
    source: 'User Preferences',
    events: {
        'Language Changed': props<{ lang: string }>(),
    },
});
