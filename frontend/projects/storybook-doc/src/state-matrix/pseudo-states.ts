const forcedStates = {
    hover: 'hover',
    focus: 'focus',
    focusVisible: 'focus-visible',
    active: 'active',
} as const;

/**
 * `parameters.pseudo` for `storybook-addon-pseudo-states`: forces each pseudo-class on `target`
 * inside the `StateMatrix` cell of the same name (e.g. `:hover` in the `hover` cell).
 * `target` is the element the component styles, usually its native control (`button`, `.input`).
 */
export function pseudoStates(target: string): Record<keyof typeof forcedStates, string[]> {
    const entries = Object.entries(forcedStates).map(([parameter, state]) => [parameter, [`.state-${state} ${target}`]]);
    return Object.fromEntries(entries);
}
