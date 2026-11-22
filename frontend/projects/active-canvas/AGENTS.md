# active-canvas - local AI guidelines

This project contains the core logic for the interactive canvas, drawing algorithms, and canvas-related state management.

## Important Note

- **Base Rules:** Always refer to the global guidelines in `../../AGENTS.md` for general Angular patterns.

## Local Context

- **Canvas Logic:** Focus on performance. Since we are Zoneless, ensure manual triggers or signal updates are efficient during heavy drawing operations.
- **Data Models:** Defines the primary interfaces for `Sector`, `ImageObject`, and `ActiveCanvas` data.
- **Mathematical Logic:** Pure functions are preferred for coordinate calculations and geometry.
