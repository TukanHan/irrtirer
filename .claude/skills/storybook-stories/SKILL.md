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
- Add another story only for a state the controls cannot reach, or a `States` story (below) where the library's rules ask for one.
- The code snippet under the story should show real usage for the chosen args. Build the `render` template with `elem()` from `storybook-doc/template-builder`: hard-code values with `withInput` (pass the component default to omit it), bind only what must stay live (`withBinding`), keep `Playground` args out of the bindings.
- Bind every output of the component in `Default` with `withOutput`, so its events show in the Actions panel.
- Markup that only sets up the story (layout wrappers, router outlets) goes to `componentWrapperDecorator`, with `parameters.docs.source.excludeDecorators: true`, so the snippet shows the component alone.
- Use a story-only wrapper component only when unavoidable (e.g. Signal Forms setup), because it hides the usage.

```ts
render: (args) => ({
    props: args,
    template: elem('ids-x').withInput('variant', args.variant, 'neutral').withOutput('clicked').withContent(args.text).build(),
}),
```

## States story

Shows the component in each of its states at once, including pointer and keyboard states that normally need interaction.

- Build it with `StateMatrix` and `pseudoStates()` from `storybook-doc/state-matrix`; `storybook-addon-pseudo-states` forces the pseudo-classes.
- Show only the states the component really distinguishes - read its styles.
- `disabled` hides persistent states but keeps variants: with persistent states as sections (`invalid`, `current`) it is a section of its own, otherwise the last state in every section.
- Pick the layout that suits the component. Existing `States` stories are examples, not a template.
- Only CSS pseudo-classes can be forced. States driven by code (e.g. a tooltip opened on `mouseenter`) stay out of the matrix - never add API just for a story.

## argTypes

Use only these categories:

| Category         | Contains                                                                    |
| ---------------- | --------------------------------------------------------------------------- |
| `playground`     | story-only args: projected content, prefix/suffix toggles, layout variants  |
| `inputs`         | `input()` and `model()`                                                     |
| `outputs`        | `output()`, as `action`                                                     |
| `class`          | host modifier classes, one arg per group of exclusive classes (e.g. `size`) |
| `css properties` | public custom properties of the component (`styles/public-tokens`)          |

Compodoc fills `inputs` and `outputs` from the component: type, default, control and the JSDoc description. Don't repeat that in `argTypes`.

- Story-only args (`playground`, `class`) get an entry with `table.category` and `description`; declare `playground` entries first.
- A `class` arg is an `inline-radio` with the full class names as options plus `null` labelled `none`, applied with `withClass`, and `table.type.summary: 'string'` (the `null` option makes it `object`). A `select` would add an empty option of its own.
- `css properties` args come from `cssPropertyArgTypes` (`storybook-doc/css-properties`), default to `''` (unset) and are applied with `withStyle`. They are the component's list of public tokens.
- Component members get an entry only to override Compodoc, e.g. a better-suited control. Describe them in the component's JSDoc, not here.
- Members the story drives itself (e.g. through `[formField]`) and outputs get `control: false`.
- A `model()` stays in `inputs`, also when the story only uses it as the initial value of a form.
- Hide args that do not apply with `if`.
- Type the args as the component plus story-only args: `type XStoryArgs = X & { ... }`.
- Every arg with a control gets a value in the `Default` story's `args`.

## Language

- Descriptions, docs and control labels: English.
- Sample content: language-agnostic - lorem ipsum, made-up names. No real UI phrases in any language.
