# irr-design-system (ids) - local AI guidelines

Shared UI kit and design tokens, replacing Angular Material.

Extends `../../AGENTS.md`.

## Structure

- Built from **secondary entry points**, one folder per area (`action`, `core`, `form`, `menu`, `number-input`, `side-nav`, `text-input`, `tooltip`, ...). Each has its own `ng-package.json` and `public-api.ts`.
- Import via the entry point: `import { IdsTextInput } from 'irr-design-system/text-input'`. The root `src/public-api.ts` is intentionally empty.
- Inside the library, import other entry points by their package path (`irr-design-system/core`), never by relative path across entry points.
- Shared styles and tokens: `styles/` (`ids-theme.css`, `_typography.css`, `shared/`).

## Conventions

- Selector prefix `ids-`, class prefix `Ids` (`ids-text-input`, `IdsTextInput`).
- **Presentational only:** no app services, NgRx, or translations - text comes in through inputs or content projection.
- Form controls implement Signal Forms interfaces (`FormValueControl`) and compose `IdsFormField`.
- **Tokens are the source of truth:** check `styles/` before adding a color, spacing, or font value; never hardcode one in a component.
- Every public component gets a `*.stories.ts` (title `Design System/<Name>`) and is exported from its entry point's `public-api.ts`.
