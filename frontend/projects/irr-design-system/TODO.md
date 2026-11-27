# irr-design-system - standard violations

Known deviations from `STANDARD.md`, grouped by rule. Remove an item once fixed.

## accessibility/apg-pattern, accessibility/keyboard

- [ ] `toolbar` (app): `mat-radio-group` inside `ids-menu` breaks `role="menu"` (only menu items allowed, arrow keys find nothing) - deferred until the library has its own radio; then `menuitemradio` items in `ids-menu` (preferred) or a separate popover

## states/state-model

- [ ] `flat-link`: `current` is lost under `:focus-visible` (focus overlay 0.1 overrides current 0.15) and `:active` (same 0.15 + bold as current) - see its `States` story
- [ ] `side-nav-item`: `current` loses its highlight icon color under `:hover` and `:focus-visible` (the muted hover color overrides it) - see the `side-nav` `States` story

## styles/ids-prefix-only

- [ ] `--irr-icon-*` set in `side-nav-item.css`, `ids-flat-action.css`, `menu-item.css` - tied to the tolerated `MatIcon`

## styles/override-via-tokens

- [ ] `toolbar.scss` (app) sets the internal `--ids-panel-padding` on `.language-panel` through `::ng-deep` with `!important` - the menu needs a public token (e.g. `--ids-menu-padding`)

## styles/shared-recipes

- [ ] `styles/shared/ids-flat-action.css` mixes several recipes (layout, state overlay, text shadow) - split into one file per recipe
- [ ] Repeated state overlay (`::before` + opacity per interaction state) in `menu-item.css` and `side-nav-item.css` - candidate for a shared recipe

## styles/recipe-knobs

- [ ] `flat-link.css` overrides `--ids-flat-action-overlay-opacity` and the content `font-weight` of the flat-action recipe for `[aria-current]` (cause of the `flat-link` `states/state-model` item)
- [ ] `flat-button`, `flat-link`, `framed-button`, `menu`, `tooltip-panel`: own stylesheet listed before shared files in `styleUrls`

## Open: Styles (continue later)

- [ ] Once the styles decisions are settled: rewrite all component styles against the `styles/*` rules (most of them do not comply yet, so violations are not listed one by one)
- [ ] Units: a solid rule for what is in `rem` and what in `px`
- [ ] Cascade layers: the theme file is unlayered, so it beats any token override the app makes inside a `@layer` (the app uses `base`, `external`) and silently breaks `styles/override-via-tokens` - decide whether the theme goes into a named layer (e.g. `@layer ids`)
- [ ] `:host` `display`: set inconsistently (some components rely on the default `inline`) - decide whether every component declares it
- [ ] Bug: `framed-button.css` reads undefined `--ids-shadow-layer-1-transparent-mix` and `--ids-shadow-layer-2-transparent-mix`, so its text shadows most likely do not render
- [ ] Visual style: only an intro exists. Rule candidates discussed but not accepted:
    - `surface-kinds`: floating elements (menu, tooltip) are glass, in-flow controls are solid - intentional or accidental?
    - `glow-color`: glow color expressed through one token per variant (outdated wording: `--ids-glow-color` is internal now and must follow `styles/token-naming` - restate when visual style is discussed)
    - `reduced-motion`: animations respect `prefers-reduced-motion` (`framed-button` border animation does not)

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

## Tooling idea: automated a11y checks (axe)

`@storybook/addon-a11y` (axe) is installed but only shows a panel - easy to miss. Evaluate a failing check instead:

- [ ] `vitest-axe` in specs (jsdom - no contrast check)
- [ ] Storybook stories run as Vitest tests (`@storybook/addon-vitest`) with a11y violations failing the run (real browser - includes contrast)
- [ ] Think about a `storybook/a11y-clean` rule (no a11y panel violations in any theme) - the panel currently reports many errors

## Tooling idea: audit skill

- [ ] Consider `.claude/skills/ids-audit/SKILL.md`: check components against `STANDARD.md` one category at a time, reading only the files that category needs, and report a table (component × rule → ok / violation / n/a) to feed this file
