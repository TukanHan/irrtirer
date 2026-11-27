# irr-design-system - standard violations

Known deviations from `STANDARD.md`, grouped by rule. Remove an item once fixed.

## accessibility/apg-pattern, accessibility/keyboard

- [ ] `toolbar` (app): `mat-radio-group` inside `ids-menu` breaks `role="menu"` (only menu items allowed, arrow keys find nothing) - deferred until the library has its own radio; then `menuitemradio` items in `ids-menu` (preferred) or a separate popover

## states/state-model

- [ ] `flat-link`: `current` is lost under `:focus-visible` (focus overlay 0.1 overrides current 0.15) and `:active` (same 0.15 + bold as current) - see its `States` story
- [ ] `side-nav-item`: `current` loses its highlight icon color under `:hover` and `:focus-visible` (the muted hover color overrides it) - see the `side-nav` `States` story

## testing

- [ ] `action/flat-link/flat-link.spec.ts` does not follow the `unit-tests` skill (raw `TestBed`, `detectChanges()`, queries by tag)

## documentation/class-doc

- [ ] No class JSDoc: `error`, `form-field`, `prefix`, `suffix` (only the public ones need it)

## documentation/member-doc

- [ ] Inputs without JSDoc: `form-field`

## storybook/story-per-family

- [ ] `form` has no story - its parts are shown in the input stories; decide whether that is enough

## styles/token-layers

- [ ] `ids-theme.css`: raw hex values inside semantic tokens (`#c9c9c9`, `#eeeeee`, `#18181b`, `#dbdbdb`, `#5d5d5d`, `#292929`, `#383838`, `#272b2f`, `#2592ff`, `#fc2727`) - move to primitives
- [ ] `ids-theme.css`: `--ids-color-accent`, `-highlight`, `-danger` are named like primitives but are semantic (`light-dark`)

## styles/no-literals

- [ ] `styles/shared/ids-panel.css`: `black` in `box-shadow`

## styles/component-token-scope

- [ ] `ids-theme.css`: `--ids-tooltip-surface-color`, `--ids-sidenav-surface-color` are used by one component each - move to its `:host`

## styles/ids-prefix-only

- [ ] `--irr-icon-*` set in `side-nav-item.css`, `ids-flat-action.css`, `_typography.css` - tied to the tolerated `MatIcon`

## Open: Styles (continue later)

- [ ] Token naming pattern: category first (`--ids-color-text-danger`, DTCG style, recommended) or property last (`--ids-text-danger-color`, current majority)
- [ ] Units: a solid rule for what is in `rem` and what in `px`
- [ ] Visual style: only an intro exists. Rule candidates discussed but not accepted:
    - `surface-kinds`: floating elements (menu, tooltip) are glass, in-flow controls are solid - intentional or accidental?
    - `shared-recipes`: recurring effects (glass panel, glow, state overlay) implemented once in `styles/shared/`
    - `glow-color`: glow color expressed through one `--ids-glow-color` token per variant
    - `reduced-motion`: animations respect `prefers-reduced-motion` (`framed-button` border animation does not)
- [ ] `color-scheme`: `light-dark()` needs it, the library never sets it (relies on the app) - set it on the theme classes or document it as the app's duty

## Open: Accessibility

- [ ] Toggle state on buttons: `flat-button` cannot expose `aria-expanded` (disclosure) or `aria-pressed` (toggle), so app toggles (chevrons, tile visibility, theme) swap their `label` instead - consider state inputs with a stable label

## Open: Translations

- [ ] Built-in texts: once a component renders its own text (e.g. a close button label), decide how the library gets translations without depending on ngx-translate (e.g. an injection token / provider the app fills)

## Open: Storybook

- [ ] Stories render with the app's global styles (`storybook-doc` imports `irrtirer` `styles.scss`), so a component that works only thanks to app styles goes unnoticed - consider rendering `ids` stories with library styles only

## Design decisions to make (UX sessions)

- [ ] Overlay intensity per state (currently hover 0.05, focus 0.1, active 0.15)
- [ ] Disabled look (currently `opacity: 0.5`)
- [ ] Visibility of the flat-button focus indicator (only a 0.1 overlay, `outline: none`) - check against WCAG

## Tooling idea: enforce the standard with ESLint

Move mechanical checks from `STANDARD.md` into `eslint.config.mjs`, then point each rule's `Check:` to the ESLint rule.

- [ ] `accessibility/*`: `templateAccessibility` runs only on `*.html`; library templates are inline - enable angular-eslint inline template processing

## Tooling idea: automated a11y checks (axe)

`@storybook/addon-a11y` (axe) is installed but only shows a panel - easy to miss. Evaluate a failing check instead:

- [ ] `vitest-axe` in specs (jsdom - no contrast check)
- [ ] Storybook stories run as Vitest tests (`@storybook/addon-vitest`) with a11y violations failing the run (real browser - includes contrast)
- [ ] Think about a `storybook/a11y-clean` rule (no a11y panel violations in any theme) - the panel currently reports many errors

## Tooling idea: audit skill

- [ ] Consider `.claude/skills/ids-audit/SKILL.md`: check components against `STANDARD.md` one category at a time, reading only the files that category needs, and report a table (component × rule → ok / violation / n/a) to feed this file
