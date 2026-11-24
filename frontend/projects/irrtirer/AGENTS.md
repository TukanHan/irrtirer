# irrtirer - local AI guidelines

Main application: mosaic generation, sector management, primary UI.

Extends `../../AGENTS.md`.

## Local context

- **Styling:** Tailwind CSS for layout and utilities. Avoid creating or changing stylesheet files when possible.
- **Forms:** Signal Forms (`@angular/forms/signals`) exclusively.
- **UI components:** use `irr-design-system` components. Remaining Angular Material usages (icon, dialog, snack-bar, form-field, ...) are migration targets - do not add new ones.
- **Translations:** every user-facing string goes through ngx-translate with keys in both `en.json` and `pl.json`.
- **Tests:** Vitest specs next to the tested file; welcome for logic and non-trivial components.
