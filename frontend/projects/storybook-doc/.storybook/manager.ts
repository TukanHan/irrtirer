import { addons } from 'storybook/manager-api';
import { GLOBALS_UPDATED, SET_GLOBALS } from 'storybook/internal/core-events';
import type { Globals } from 'storybook/internal/types';

// Must match the colors in theme-backgrounds.css.
const BACKGROUND_BY_THEME: Record<string, string> = { dark: 'gray87', light: 'gray0' };

// The theme paints its own background (theme-backgrounds.css); switching the theme replaces a background
// picked by hand with the theme's own. Not cleared instead: the toolbar select keeps showing a stale
// value when the background is cleared from outside.
// Runs in the manager, not in a story decorator: on docs pages every story has its own decorator,
// and their updates race with each other.
addons.register('irrtirer/theme-background-sync', (api) => {
    let lastTheme: string | undefined;

    const resetBackgroundOnThemeChange = ({ globals }: { globals: Globals }): void => {
        const theme = globals['theme'];
        const themeChanged = lastTheme !== undefined && theme !== lastTheme;
        lastTheme = theme;
        if (themeChanged && globals['backgrounds']?.value) {
            api.updateGlobals({ backgrounds: { ...globals['backgrounds'], value: BACKGROUND_BY_THEME[theme] } });
        }
    };

    api.on(SET_GLOBALS, resetBackgroundOnThemeChange);
    api.on(GLOBALS_UPDATED, resetBackgroundOnThemeChange);
});
