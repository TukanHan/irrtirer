---
name: storybook-stories
description: Write or update Storybook stories (`*.stories.ts`). Use when a `*.stories.ts` file is created or changed, or when working on a component that has one: check whether its story needs updating and ask before changing it.
---

# Storybook stories

## Purpose

Stories serve three roles:

- **Workbench:** components are often developed here before the app uses them.
- **Test bench:** stories cover states that are hard or impossible to reach in the app (errors, edge values, disabled, overflow).
- **Documentation:** Storybook is published on GitHub Pages.

Every state of a component must be reachable from the Storybook UI, without running the app.

## Approach

The project is small, so docs stay lightweight:

- No MDX pages. Documentation comes from autodocs (`tags: ['autodocs']`).
- One story per component: `Default`, a playground with all controls.
- Add another story only for a state the controls cannot reach.
- The code snippet under the story should show real usage of the component. Render it directly in the `render` template; use a story-only wrapper component only when unavoidable (e.g. Signal Forms setup), because it hides the usage.

## argTypes

Every `argTypes` entry sets `table.category`. Use only these categories, declared in this order:

| Category     | Contains                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------- |
| `Playground` | story-only args: initial value, projected content, prefix/suffix toggles, layout variants   |
| `Inputs`     | `input()` and `model()`                                                                     |
| `Outputs`    | `output()`, as `action`                                                                     |
| `Class`      | host modifier classes: `className` arg, `select` with a `null` option, bound with `[class]` |

Not every member needs an entry - add one when it helps to try out or understand the component.
Hide args that do not apply with `if`.
Type the args as the component plus story-only args: `type XStoryArgs = X & { ... }`.
Every arg in `argTypes` gets a value in the `Default` story's `args`.

## Language

- Descriptions, docs and control labels: English.
- Sample content: language-agnostic - lorem ipsum, made-up names. No real UI phrases in any language.
