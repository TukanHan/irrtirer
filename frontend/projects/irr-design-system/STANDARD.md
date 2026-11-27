# irr-design-system - standard

Rules every component in the library must follow.

## How to read

- A rule is referenced as `<category>/<rule>`, e.g. `structure/named-exports`.
- Levels follow RFC 2119: **MUST** is mandatory, **SHOULD** may be broken with a reason, **MAY** is optional.
- `Check:` says how to verify the rule.
- The standard covers only library-specific decisions that are otherwise ambiguous. It does not repeat what TypeScript, the linter or the workspace `AGENTS.md` files already enforce.

## Visual style

Work in progress - the visual language is not settled yet. The goal: every component is wired through shared tokens, classes and components so the library reads as one consistent system. The intended direction is glassmorphism, but nothing is final.

## Dependencies

Components are built from scratch. Heavy dependencies from other libraries are not accepted.

### Accepted

- Angular packages: `@angular/core`, `@angular/common`, `@angular/forms`, `@angular/router`
- `@angular/cdk`

### Tolerated

Allowed for now, until a decision replaces them. Do not extend their use.

- `MatIcon` from `@angular/material/icon`

## Structure

### entry-point-per-family · MUST

Each component family (a component with its variants and parts) lives in its own secondary entry point with `ng-package.json` and `public-api.ts`. Do not merge unrelated families to make bigger packages.

**Check:** folder listing.

### empty-root-api · MUST

`src/public-api.ts` exports nothing; consumers import entry points only.

**Check:** ESLint (`no-restricted-syntax`).

### cross-entry-imports-by-package · MUST

Code in one entry point imports another by package path (`irr-design-system/internal`), never by a relative path.

**Check:** `ng build irr-design-system` (fails with TS6059).

### internal-entry-point · MUST

Shared library internals live in the `internal` entry point. Only the library imports it; the app does not.

**Check:** grep the app for imports of the internal entry point.

### named-exports · MUST

`public-api.ts` uses named exports only.

**Check:** ESLint (`no-restricted-syntax`).

### no-internal-exports · MUST

Parts used only inside the library (e.g. an overlay panel, a counter) are not exported from a consumer-facing `public-api.ts`.

**Check:** review each `public-api.ts`.

### public-symbol-prefix · MUST

Every symbol exported from a consumer-facing entry point starts with `Ids` (constants: `IDS_`), including types used by component inputs.

**Check:** ESLint (`no-restricted-syntax`); review input types.

### file-name-matches-class · MUST

A component's file and folder are named after its class without the `Ids` prefix, in kebab-case (`IdsTextInput` → `text-input/text-input.ts`).

**Check:** compare the class name with the file path.

### one-declaration-per-file · MUST

A file declares one component, directive or pipe.

**Check:** ESLint (`max-classes-per-file`).

### folder-layout · MUST

The main component of an entry point sits in its root; its parts go to subfolders. An entry point with several equal components (`action`, `form`) puts each in its own subfolder.

**Check:** folder listing.

### no-stray-entry-files · MUST

An entry point root contains only `ng-package.json`, `public-api.ts`, its main component files and subfolders.

**Check:** folder listing.

### presentational-only · MUST

Components use no app services, NgRx or translations; text comes in through inputs or content projection.

**Check:** grep imports for app paths, `@ngrx`, `@ngx-translate`.

## API

### shared-vocabulary · MUST

The same concept uses the same name and type in every component:

- `disabled: boolean`
- `label: string` - visible or accessible text of the control
- `variant: 'accent' | 'neutral' | 'danger'`, default `'neutral'`
- `clicked: MouseEvent` - click output

**Check:** grep `input(`/`output(` for synonyms (`isDisabled`, `text`, `color`, `click`...).

### boolean-attribute · MUST

Every boolean input uses `transform: booleanAttribute`, so a bare attribute (`<ids-flat-button disabled>`) works.

**Check:** grep `input<boolean>` without `booleanAttribute`.

### capability-interfaces · MUST

What several components share, or what another part of the library relies on (e.g. a menu trigger), is an interface in the internal entry point. Components implement it; the cooperating part depends on the interface, not on concrete components. Prefer an existing `@angular/cdk` interface when one fits.

**Check:** components with a `clicked` output declare `implements Clickable`; same for every other capability interface.

### directive-input-prefix · MUST

Directive inputs start with the directive name (`idsTooltip`, `idsTooltipPosition`).

**Check:** grep `input(` in `@Directive` classes.

### form-control-contract · MUST

A form control implements `FormValueControl`, exposes `value` (model), `touch` (output) and the inputs `label`, `disabled`, `required`, `placeholder`, `invalid`, `touched`, and takes its `id` from `IdentityGenerator`.

**Check:** compare form controls with `text-input`.

### content-vs-input · SHOULD

Rich visible content comes through `<ng-content>`; plain text that is also used in attributes (aria, tooltip) comes through an `input()`.

**Check:** review templates.

## States

Covers which states exist and how they are wired. How a state looks (opacity, colors, effects) belongs to Visual style.

### state-model · MUST

States form three layers, applied in this order.

1. **Availability** - a gate for everything below.
    - `disabled` blocks interaction and hides persistent states.
    - `readonly` (future) blocks editing but keeps interaction.
2. **Persistent** - from component state, not the pointer. They last through every interaction state. The highest one decides the base look; others may add non-conflicting accents.
    1. `invalid`
    2. `current` (later: selected, checked)
    3. `open` (later: expanded)
3. **Interaction** - transient; exactly one is shown, layered on top of the persistent state.
    1. `:active`
    2. `:focus-visible` (text fields: `:focus`)
    3. `:hover`
    4. rest

Every combination of a persistent and an interaction state is distinguishable: `invalid` + `:hover` differs both from `invalid` at rest and from `:hover` alone.

**Check:** selectors exclude stronger states (`:not(:disabled)`, `:not(:active)`, `:not(:focus-visible)`); a story or test shows each persistent state under each interaction state.

### disabled-marker · MUST

A native control uses the native `disabled` attribute. An element without one (e.g. a link) uses `aria-disabled="true"` and `tabindex="-1"`, and styles target `[aria-disabled='true']`.

**Check:** review templates of disabled-capable components.

### cursor · MUST

Interactive elements use `cursor: pointer`; disabled ones use `cursor: default`.

**Check:** grep `cursor:`.

### aria-state · MUST

When an ARIA attribute exists for a state (`aria-invalid`, `aria-current`, `aria-expanded`, `aria-disabled`), it is set on the element that carries the role (native input, link, button) and reflects what is shown on screen. Styles target that attribute (from a wrapper via `:has()`), with no parallel state class.

**Check:** grep state classes (`--invalid`, `--current`, `--open`) that have an ARIA counterpart.

### current-not-active · MUST

The "current" state (active route, selected item) is never named `active`, which is reserved for the `:active` pseudo-class. It is expressed with `aria-current` (see `states/aria-state`).

**Check:** grep class names for `active`.

## Accessibility

Target: WCAG level AA. Interaction patterns follow the WAI-ARIA Authoring Practices Guide (APG). How states are exposed: `states/aria-state`.

### native-first · MUST

Use the native element when one exists (`<button>`, `<a>`, `<input>`, `<label>`) instead of a `role` on a generic element.

**Check:** grep templates for `role="button"`, `role="link"`, `(click)` on `div`/`span`.

### apg-pattern · MUST

The class JSDoc says where the component's roles and keyboard support come from:

- **Native element** (`button`, `a`, `nav`, `input`): from the browser. `Renders a native <button>.`
- **Overlay or several cooperating parts** (menu, tooltip, tabs, dialog...): from its APG pattern, implemented in full (roles, keyboard, focus management). `Implements the [APG <Name> pattern](<url>).`

**Check:** the class JSDoc has one of these lines; for a pattern, the spec covers its roles and keyboard interactions.

### accessible-name · MUST

Every interactive component has an accessible name. When its content is not text (e.g. icon only), the `ariaLabel` input is rendered as `aria-label`. The `label` input is reserved for visible text.

**Check:** review templates; icon-only stories.

### keyboard · MUST

Everything operable with a pointer is operable with a keyboard. Overlays close on `Escape` and return focus to the element that opened them.

**Check:** keyboard walk-through in Storybook.

### form-control-a11y · MUST

A form control is labelled through `<label for>`, passes `required` to the native input, and links its errors to the input with `aria-describedby`.

**Check:** review form control templates.

## Testing

How to write tests: the `unit-tests` skill. The library ships no CDK component harnesses; consumers test it through Testing Library queries by role and label.

### spec-on-change · MUST

A component that is created or changed gets its spec created or updated. The spec MUST cover data in and out (inputs, outputs, form `value`) and SHOULD cover states from `states/state-model`, the accessible name and keyboard support.

**Check:** changed components have a changed or new `*.spec.ts`.

## Documentation

JSDoc of the public API is what Storybook shows in the docs page and the args table.

### class-doc · MUST

Every public component and directive has a JSDoc saying in one or two sentences what it is. It stands above the decorator.

**Check:** grep `@Component(`/`@Directive(` in public entry points without a JSDoc right above.

### member-doc · SHOULD

A public input, model or output has a JSDoc when it tells more than its name and type: what changes on screen, when it is emitted. Members set by Signal Forms are documented like any other and add `Set by the form when bound with [formField].` The JSDoc of a model also reads well as the description of its `<name>Change` event.

**Check:** the args table in the component's docs page.

## Storybook

How to write stories: the `storybook-stories` skill.

### story-per-family · MUST

Every public component family has a story. Its parts (e.g. menu items, form field, affixes) are shown inside the family's story, not in stories of their own.

**Check:** every consumer-facing entry point has a `*.stories.ts`.

### story-title · MUST

The story title mirrors the entry point: `Design System/<Entry point>/<Component>`, or `Design System/<Component>` for a single-component entry point.

**Check:** compare `title:` with the file path.

### state-matrix · SHOULD

A component with persistent states or variants has an extra `States` story showing each of them under each interaction state (`states/state-model`). The layout is up to the component.

**Check:** stories of components with persistent states or variants; how to build one: the `storybook-stories` skill.

## Styles

Design tokens (CSS custom properties) and theming.

### plain-css · MUST

Library styles are plain CSS files (`.css`), no preprocessor. Components reference them with `styleUrl`/`styleUrls`; no inline `styles`.

**Check:** no `.scss`/`.sass` files and no `styles:` in component decorators.

### global-tokens-only · MUST

Global library stylesheets (the theme file and what it imports) define only custom properties and `color-scheme`: no classes, no element selectors. Everything else lives in component styles.

**Check:** the theme file and its imports contain only `:root` and `[data-theme]` blocks with custom property and `color-scheme` declarations.

### shared-recipes · MUST

A style shared by several components (a recipe: state overlay, glass panel, glow) lives in `styles/shared/`, one recipe per file, and is included through `styleUrls` with a relative path.

**Check:** each file in `styles/shared/` covers one recipe; no rule block is copied between component stylesheets.

### recipe-knobs · MUST

A recipe exposes what a component may change as custom properties. A component sets those properties and does not override the recipe's selectors or properties. In `styleUrls`, shared files come first and the component's own file last.

**Check:** component stylesheets do not repeat recipe selectors; order of `styleUrls`.

### token-layers · MUST

Tokens form three layers:

1. **Primitive** - raw palette colors without meaning. Defined only in the theme file. Other scales (radius, spacing, typography) have no primitive layer and start as semantic tokens.
2. **Semantic** - meaning (text, surface, border, accent, danger). Defined only in the theme file, built from primitives.
3. **Component** - a component's own tokens, built from semantic ones.

**Check:** the theme file has no raw values in semantic tokens; component styles define no primitives.

### token-naming · MUST

Each layer has its own name pattern:

| Layer     | Pattern                                 | Examples                                    |
| --------- | --------------------------------------- | ------------------------------------------- |
| Primitive | `--ids-palette-<color>-<step>`          | `--ids-palette-gray-10`                     |
| Semantic  | `--ids-<category>-<role>[-<variant>]`   | `--ids-color-text-muted`, `--ids-radius-md` |
| Component | `--ids-<component>[-<part>]-<property>` | `--ids-flat-button-content-color`           |

A higher primitive `<step>` is darker. `--ids-palette-white` and `--ids-palette-black` stand outside the color scales and have no step.

**Check:** compare token names in the theme file and component styles with the patterns.

### class-naming · MUST

Classes describe template structure only and are named `ids-<component>[-<part>]` (`ids-form-field-label`), without BEM `__`/`--`. Every class has the `ids-` prefix, because the app's global styles reach inside components.

Exception: typography recipes in `styles/shared/typography/` describe a text role, named `ids-type-<role>-<size>` (`ids-type-label-md`).

**Check:** grep library templates for classes without the `ids-` prefix or with `__`/`--`.

### variant-attributes · MUST

A variant (a value of an `input()` that changes the look, e.g. `variant`, `size`) is reflected as `data-<input>` on the host (`host: { '[attr.data-variant]': 'variant()' }`) and styled with `:host([data-<input>='<value>'])`. States use ARIA and pseudo-classes (`states/aria-state`).

**Check:** no modifier classes in templates; variant selectors use `:host([data-*])`.

### layer-access · MUST

Components read only semantic tokens and component tokens, never primitives.

**Check:** grep component styles for `--ids-palette-`.

### no-literals · MUST

Colors in component styles always come from tokens. Other values (spacing, sizes, radii, typography, motion) SHOULD come from tokens; those token sets grow as needed.

**Check:** grep component styles for hex, `rgb(`, `hsl(` and named colors.

### component-token-scope · MUST

A component token lives in its component's `:host`. Only a token shared by several components (e.g. panel, form control) lives in the theme file.

**Check:** component-named tokens in the theme file are used by more than one component.

### ids-prefix-only · MUST

The library defines and reads only `--ids-*` custom properties.

**Check:** grep library styles for `var(--` and `--` declarations without the `ids-` prefix.

### light-dark-only · MUST

Color differences between themes are expressed only with `light-dark()` in semantic tokens. Component styles contain no theme-specific code.

**Check:** grep component styles for `data-theme` and `prefers-color-scheme`.

### theme-attribute-overrides · MUST

Values `light-dark()` cannot express (e.g. shadow strength) are overridden by the theme attribute (`[data-theme='light']`), only in the theme file.

**Check:** `data-theme` selectors appear only in the theme file.

### theme-file · MUST

The library publishes one self-contained theme file with the tokens of both themes and no `@import`. It is the only stylesheet shipped in `dist`.

**Check:** `ng-package.json` assets; the theme file has no `@import`.

### theme-ownership · MUST

The library sets `color-scheme` (`light dark` on `:root`) and defines `[data-theme='light' | 'dark']`, which forces one scheme. The app only sets `data-theme` on `<html>`; without it, the system preference applies.

**Check:** `color-scheme` and the `data-theme` selectors are declared in the theme file; the app's styles set no `color-scheme`.

### override-via-tokens · MUST

Consumers change the look only through custom properties: globally by overriding semantic tokens, locally by setting public component tokens on an element or its ancestor. Never through selectors targeting the library's internal classes.

**Check:** grep the app styles for `ids-` class selectors and `::ng-deep` into library components.

### public-tokens · MUST

A component's public custom properties are the ones listed in its Storybook docs. All others are internal and may change without notice. Consumers set only public tokens (`styles/override-via-tokens`).

**Check:** custom properties set by the app appear in the docs of the component they target.

### read-only-public-tokens · MUST

The library only reads a public token, with a default (`var(--ids-flat-button-size, 36px)`), and never declares it. A value set by the consumer on the element or any ancestor then always wins.

**Check:** component styles contain no declarations of their public tokens.
