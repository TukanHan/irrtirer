# storybook-doc - local AI guidelines

Storybook configuration only; stories stay next to their components in the other projects.

Extends `../../AGENTS.md`.

## Facts

- Global styles and translations come from `irrtirer` (`preview.ts`, `staticDirs`), so every story renders with the app's global styles.
- A project gets stories by adding its glob to `.storybook/main.ts` and its sources to `.storybook/tsconfig.json` (stories) and `.storybook/tsconfig.doc.json` (Compodoc).
- The build lands inside the app's output (`dist/irrtirer/browser/storybook`) and is published with it.
