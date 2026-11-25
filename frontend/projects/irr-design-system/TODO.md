# irr-design-system - standard violations

Known deviations from `STANDARD.md`, grouped by rule. Remove an item once fixed.

## api/boolean-attribute

- [ ] `text-input`: `disabled`, `required`, `invalid`, `touched`
- [ ] `number-input`: `disabled`, `required`, `invalid`, `touched`

## api/capability-interfaces

- [ ] `menu/menu-trigger.ts`: selector lists concrete buttons instead of relying on `Clickable` - investigate (e.g. inject `Clickable` via token)

## states/cursor

- [ ] `flat-button`, `framed-button`: disabled uses `cursor: unset`

## states/current-not-active

- [ ] `flat-link`: `ids-active-link` → `aria-current` only
- [ ] `side-nav-item`: `ids-side-nav-item--active` → `aria-current` only

## states/aria-state

- [ ] `form-field` sets `ids-text-input--invalid` on itself → `aria-invalid` on the native `<input>` (reflecting `showError()`), styled via `:has()`

## accessibility/apg-pattern, accessibility/keyboard

- [ ] `menu`: implement APG Menu Button - roles `menu`/`menuitem`, `aria-haspopup` + `aria-expanded` on the trigger, arrow keys, `Escape`, focus return
- [ ] `tooltip`: link host and panel with `aria-describedby`; dismiss on `Escape` (WCAG 1.4.13)

## accessibility/form-control-a11y

- [ ] `text-input`, `number-input`: link `ids-error` to the input via `aria-describedby`
- [ ] `text-input`, `number-input`: pass `required` to the native input

## accessibility/accessible-name

- [ ] `flat-button`, `framed-button`: no way to name an icon-only button (`label` → `aria-label`)

## accessibility/native-first

- [ ] `side-nav`: not a `<nav>` landmark

## testing

- [ ] `action/flat-link/flat-link.spec.ts` does not follow the `unit-tests` skill (raw `TestBed`, `detectChanges()`, queries by tag)

## storybook/story-title

- [ ] `flat-button`, `framed-button`: `Design System/Buttons/...` → `Design System/Action/...`
- [ ] `flat-link`: `Design System/Links/Flat Link` → `Design System/Action/Flat Link`

## storybook/story-per-family

- [ ] `form` has no story - its parts are shown in the input stories; decide whether that is enough

## storybook/state-matrix

- [ ] `States` story missing: `text-input`, `number-input` (invalid), `flat-link`, `side-nav` (current)

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

## Design decisions to make (UX sessions)

- [ ] Overlay intensity per state (currently hover 0.05, focus 0.1, active 0.15)
- [ ] Disabled look (currently `opacity: 0.5`)
- [ ] Visibility of the flat-button focus indicator (only a 0.1 overlay, `outline: none`) - check against WCAG

## Tooling idea: enforce the standard with ESLint

Move mechanical checks from `STANDARD.md` into `eslint.config.mjs`, then point each rule's `Check:` to the ESLint rule.

- [ ] `structure/named-exports`: `no-restricted-syntax` (`ExportAllDeclaration`) for `public-api.ts`
- [ ] `structure/cross-entry-imports-by-package`: `no-restricted-imports` with relative path patterns
- [ ] `structure/internal-entry-point`: `no-restricted-imports` of `irr-design-system/core` in the app
- [ ] `structure/presentational-only`: `no-restricted-imports` of `@ngrx/*`, `@ngx-translate/*`
- [ ] `structure/one-declaration-per-file`: `max-classes-per-file`
- [ ] `structure/public-symbol-prefix`: `@typescript-eslint/naming-convention` (`exported`), excluding `core`
- [ ] `structure/file-name-matches-selector`, `no-stray-entry-files`: evaluate `eslint-plugin-check-file`
- [ ] `accessibility/*`: `templateAccessibility` runs only on `*.html`; library templates are inline - enable angular-eslint inline template processing

## Tooling idea: automated a11y checks (axe)

`@storybook/addon-a11y` (axe) is installed but only shows a panel - easy to miss. Evaluate a failing check instead:

- [ ] `vitest-axe` in specs (jsdom - no contrast check)
- [ ] Storybook stories run as Vitest tests (`@storybook/addon-vitest`) with a11y violations failing the run (real browser - includes contrast)
- [ ] Think about a `storybook/a11y-clean` rule (no a11y panel violations in any theme) - the panel currently reports many errors

## Tooling idea: audit skill

- [ ] Consider `.claude/skills/ids-audit/SKILL.md`: check components against `STANDARD.md` one category at a time, reading only the files that category needs, and report a table (component × rule → ok / violation / n/a) to feed this file

## Tooling idea: Storybook

- [ ] `storybook-addon-pseudo-states` - force `:hover`, `:focus-visible`, `:active` to show the `states/state-model` matrix in one story
- [ ] Story template builder - args in, only the resulting usage code out (check `argsToTemplate` from `@storybook/angular` first)

## Bugs

- [ ] `number-input`: `value.set($any($event.target).value)` writes a string into a `number` model
