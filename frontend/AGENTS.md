# Frontend - AI guidelines

Angular workspace.

Extends `../AGENTS.md`. Each project in `projects/` has its own `AGENTS.md`; local rules win on conflict.

## Projects

| Project             | Type    | Selector prefix | Purpose                                                   |
| ------------------- | ------- | --------------- | --------------------------------------------------------- |
| `irrtirer`          | app     | `app`           | Main app: mosaic generation, sector management, UI        |
| `irr-design-system` | library | `ids`           | Own UI kit replacing Angular Material, plus design tokens |
| `active-canvas`     | library | `ac`            | Interactive canvas, drawing, geometry                     |

## Technical standards

- **Zoneless** (no Zone.js). `OnPush` is the default change detection - do not set `changeDetection` explicitly and never use `ChangeDetectionStrategy.Eager`.
- State and data flow via **Signals** (`signal`, `computed`, `effect`, `linkedSignal`); signal-based `input()`, `model()`, `output()`. No `@Input`/`@Output` decorators.
- Libraries' public API (exported members, component `input()`/`model()`/`output()`): a short JSDoc is welcome - it documents usage for consumers and Storybook.

## Naming

- Components, directives, services: no type suffix in file or class name (`text-input.ts`, `TextInput`).
- Pipes, guards, interceptors, resolvers keep the type: `size-display.pipe.ts`, `SizeDisplayPipe`.
- NgRx files follow NgRx conventions (`.actions.ts`, `.reducer.ts`, `.selectors.ts`).
- Test and story files: `<name>.spec.ts`, `<name>.stories.ts` next to the source.

## Collaboration

- A component exported from a library's public API always gets a `*.stories.ts`. For any other component, ask whether it needs one; never create it unasked.

## Commands (run from `frontend/`)

- Lint one project: `npx ng lint <project>`
- Test one project (Vitest): `npx ng test <project> --watch=false`
- Format: `npm run format` / check: `npm run format:check`
- Build: `npx ng build <project>`
- Storybook (hosts stories from `irrtirer` and `irr-design-system`): `npm run sb`

## Definition of done

A change is done when, for every project it touches:

1. `ng lint <project>` passes,
2. changed files are formatted with oxfmt,
3. `ng test <project> --watch=false` passes.

Also run `ng build` for a library when its public API (any `public-api.ts`) changed. Do not run the whole test suite or Storybook build when a single project is enough.

When the owner asks for a review before committing, run these checks for the changed projects and report the results.
