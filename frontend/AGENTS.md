# Frontend AI Guidelines (Global)

This workspace uses **Angular 22** and is designed with a **Zoneless** architecture.

## Global Technical Standards

- **Angular Version:** 22.x
- **Zoneless Architecture:** The application does not use Zone.js.
    - Always use `ChangeDetectionStrategy.OnPush`.
    - Use **Signals** (`signal`, `computed`, `effect`) for state management and data flow.

## Project Structure

This frontend is divided into several projects located in the `projects/` directory. Each project has its own specific `AGENTS.md` file with local rules.

- **irrtirer**: The main application for mosaic generation and sector management. See `projects/irrtirer/AGENTS.md`.
- **irr-design-system**: The shared UI Kit and design tokens. See `projects/irr-design-system/AGENTS.md`.
- **active-canvas**: Core logic for canvas manipulation and interactive drawing. See `projects/active-canvas/AGENTS.md`.

## Workflow

- Before editing any file, check if there is a local `AGENTS.md` in its parent project directory.
- Prioritize local rules over global rules if a conflict exists.
