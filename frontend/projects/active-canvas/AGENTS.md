# active-canvas - local AI guidelines

Core logic for the interactive canvas, drawing algorithms, and canvas-related state.

Extends `../../AGENTS.md`.

## Local context

- **Performance first:** heavy drawing runs without Zone.js - keep signal updates and manual redraw triggers minimal and batched.
- **Data models:** primary interfaces for `Sector`, `ImageObject`, and `ActiveCanvas` live here.
- **Math:** prefer pure functions for coordinate and geometry calculations; cover them with unit tests (`vitest-canvas-mock` is available for canvas APIs).
