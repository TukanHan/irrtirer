# storybook-doc - local AI guidelines

Storybook configuration only; stories stay next to their components in the other projects.

Extends `../../AGENTS.md`.

## Facts

- Global styles and translations come from `irrtirer` (`preview.ts`, `staticDirs`), so every story renders with the app's global styles.
- A project gets stories by adding its glob to `.storybook/main.ts` and its sources to `.storybook/tsconfig.json` (stories) and `.storybook/tsconfig.doc.json` (Compodoc).
- `src/<tool>/` holds helpers for stories (e.g. `template-builder`), imported as `storybook-doc/<tool>`.
- The build lands inside the app's output (`dist/irrtirer/browser/storybook`) and is published with it.

## Running for agents

- Start it through the `storybook` configuration in `.claude/launch.json` (port 6016).
- Open a single story without the manager UI: `iframe.html?id=<story-id>` (e.g. `design-system-tooltip--default`); set args with `&args=<name>:<value>`.
- Stop the server when done.
