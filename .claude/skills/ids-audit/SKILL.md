---
name: ids-audit
description: Audit selected irr-design-system components against `STANDARD.md` and report findings without changing anything. Use only when the user explicitly asks for an audit or review of ids components (by command or in words); never start it on your own.
---

# ids audit

Checks named components of `irr-design-system` against its `STANDARD.md` and reports how they stand. The rules live only in `STANDARD.md`; this skill is the procedure.

## Ground rules

- Read-only: change, fix or write nothing. The user decides what to do with the report.
- `STANDARD.md` is the only source of rules. Ignore `TODO.md`.

## Scope

Audit only the components, entry points or groups the user named. If none were named, ask - never audit the whole library.

## Mode

- **Static** (default): code, lint and build.
- **Storybook**: static plus checking behavior in the running Storybook. Use it only when the request asks for it (e.g. "with Storybook", "click through it", "thoroughly").

## Static audit

1. Read `STANDARD.md`.
2. Run `npx ng lint irr-design-system`, `npx ng build irr-design-system` and `npx ng test irr-design-system --watch=false` (from `frontend/`; the whole project is fast, don't filter). Rules whose `Check:` they cover pass or fail by their result - don't verify those by hand.
3. Go through the categories one at a time. For each, read only the files its checks need (component class, template, stylesheets, spec, story, `public-api.ts`).
4. While reading, note anything that looks wrong or improvable even if no rule covers it.
5. Apply the heuristics below.

## Storybook audit

Run and open stories as `projects/storybook-doc/AGENTS.md` describes. Check behavior through text, not screenshots: tab through the component, read where focus lands, open and close overlays (`Escape`, focus return), read roles and ARIA attributes from the accessibility tree. Don't judge the look from screenshots.

Read ARIA state also at the moment of the event (e.g. a `focusin` listener on `document`), not only after it settles: a reference to an element that is not rendered yet is invisible a moment later.

## Heuristics

Not rules - places worth a look. Report what you find as observations.

**Performance**

- work repeated in every instance that could be done once and shared,
- work repeated on every change detection, event or signal change that could run less often,
- listeners, timers or observers active while nothing happens,
- behavior when rendered many times (lists).

Compare with the Material counterpart only when one of these looks suspicious.

**Security**

- HTML, SVG or URLs from inputs reaching the DOM (`innerHTML`, `bypassSecurityTrust*`, `href`/`src` bindings),
- resources loaded from outside the app's origin,
- links opening a new window without `rel="noopener"`.

## Report

Per component, starting with a one-sentence verdict (e.g. "1 violation, 1 significant a11y problem, the rest minor"), then:

1. **Compliance** - per `STANDARD.md` category: compliant, or each violation as `<category>/<rule>` with file, what is wrong and why it matters.
2. **Observations** - problems outside the standard, including heuristic findings, each marked significant or minor.
3. **Improvements** - opportunities worth considering, even when nothing is wrong.
4. **Not verified** - what this mode could not check and why.

Keep compliant categories to one line. Write the report in the language of the conversation.

After a static audit, if real gaps remain that Storybook could close (keyboard, focus, overlay behavior), end with one offer: which components, what to check, why. Make no offer when nothing needs it.
