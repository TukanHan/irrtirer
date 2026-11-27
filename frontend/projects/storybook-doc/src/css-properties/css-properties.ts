import type { ArgTypes } from '@storybook/angular';

export interface CssPropertyDoc {
    description: string;
    /** CSS value type, shown in the docs table; `<color>` gets a color picker. */
    syntax: '<color>' | '<length>';
    /** What applies when the property is not set, e.g. `36px` or `variant color`. */
    defaultValue: string;
}

/**
 * `argTypes` documenting a component's public custom properties (`styles/public-tokens`).
 * Arg names are the property names; apply them in `render` with `withStyle(name, args[name])`.
 */
export function cssPropertyArgTypes(properties: Record<string, CssPropertyDoc>): ArgTypes {
    const entries = Object.entries(properties).map(([name, { description, syntax, defaultValue }]) => [
        name,
        {
            description,
            control: syntax === '<color>' ? 'color' : 'text',
            table: { category: 'css properties', type: { summary: syntax }, defaultValue: { summary: defaultValue } },
        },
    ]);
    return Object.fromEntries(entries);
}
