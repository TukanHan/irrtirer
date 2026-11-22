# irr-design-system - local AI guidelines:

This project is the shared Design System (UI Kit) containing reusable components and design tokens.

## Important Note

- **Base Rules:** Always refer to the global guidelines in `../../AGENTS.md` for general Angular patterns.

## Local Context

- **Tokens:** Design tokens (colors, spacing, typography) are the source of truth here. Check existing theme files before adding new values.
- **Purity:** Components here should be "dumb" (presentational). They should not depend on application-specific services or state.
- **Exporting:** Ensure every public component, directive, or pipe is exported in `public-api.ts`.
- **Storybook:** Components should have `*.stories.ts` files for documentation and testing.
