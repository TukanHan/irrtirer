---
name: unit-tests
description: Write or update Angular unit tests (`*.spec.ts`) in the frontend. Use when a spec file is created or changed, or when a change in a tested file may require updating its spec.
---

# Unit tests

Vitest + Angular Testing Library (`@testing-library/angular`, `@testing-library/user-event`).

## What to test

- Behavior visible from outside: rendered DOM, emitted outputs, calls to injected services.
- Not implementation details: private fields, private methods, internal signals.
- If a test needs access to something private, the design is the problem - test through the public surface.

## Structure

- Arrange - Act - Assert, separated by a blank line.
- Render with `render()`, not raw `TestBed` + `createComponent`. Prefer a template that shows real usage - inputs, outputs and projected content bound like a consumer would:

```ts
await render('<ids-framed-button [type]="type" (clicked)="onClick($event)">Lorem ipsum</ids-framed-button>', {
    imports: [IdsFramedButton],
    componentProperties: { type, onClick },
});
```

- Zoneless: never call `detectChanges()`. Change state (input, user event, service), then `await` before asserting - `await user.click(...)`, `await fixture.whenStable()`, or a `findBy*` query.

## Querying elements

Priority, first one that works:

1. `getByRole(role, { name })`
2. `getByLabelText`
3. `getByText`
4. `id` via `container.querySelector('#...')` - only when the above are ambiguous (e.g. several identical buttons).

Never query by tag or CSS class. If an element cannot be found by role or label, fix its accessibility in the template rather than the query.

## Asserting states

Assert what a user or screen reader perceives - `disabled`, `aria-disabled`, `aria-expanded`, `aria-selected`, visibility - with plain matchers:

```ts
expect(button.disabled).toBe(true);
expect(button.getAttribute('aria-disabled')).toBe('true');
```

Exception: for a purely visual input (e.g. a variant), the modifier class is the only observable effect - assert the class and say so in a one-line comment.

## Interactions

Use `userEvent` (`const user = userEvent.setup()`), not `element.click()` or `dispatchEvent`.

## Parametrized cases

When cases differ only in data, use `it.each` with a table of named objects:

```ts
it.each([
  { value: 0, expected: '0 B' },
  { value: 1024, expected: '1 KB' },
])('formats $value as $expected', ({ value, expected }) => { ... });
```

## Translations

Provide `provideTranslateService({})` without a loader - texts render as translation keys. Query by key: `getByRole('button', { name: 'config.save' })`. Tests do not verify copy.

## Dependencies

- Real implementations where cheap (pure services, pipes, child components).
- Router: the real one via `provideRouter([...])`, never a mock.
- Stub only at boundaries: HTTP (`provideHttpClientTesting`), NgRx store (`provideMockStore`), dialogs, browser APIs.

## Naming

- `describe`: the unit under test (`'SizeDisplayPipe'`, `'IdsFramedButton'`).
- `it`: a behavior, read as a sentence - `it('disables save when the form is invalid')`.
