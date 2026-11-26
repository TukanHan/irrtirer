# Irrtirer - AI guidelines (repository root)

Tool-agnostic instructions for AI agents.
The root `CLAUDE.md` only imports the `AGENTS.md` files - edit `AGENTS.md`, never duplicate rules into `CLAUDE.md`.

## Collaboration

- **The owner commits.** Agents edit files but never commit, push, or rewrite git history.
- Prefer small, reviewable changes. If the intended change is unclear, ask before editing.
- If a rule (AGENTS.md, STANDARD.md, a skill) cannot be followed, conflicts with another, or no longer fits the code, say so and propose changing the rule - never work around it silently.

## Language

- Code, identifiers, comments, commit messages: English.
- Markdown documentation: English.
- Storybook: descriptions and docs in English; sample content in stories language-agnostic (lorem ipsum, made-up names).

## Code comments

- Prefer self-explanatory code over comments: extract a well-named method or variable instead of describing what code does.
- Comment only the non-obvious _why_ (workaround, external constraint, link to an issue).
- Doc comments (JSDoc/TSDoc, XML doc comments) only where they add information the signature does not.

## Writing docs and instructions

- Minimal: write only what is necessary, no filler.
- Nothing that ages badly: no version numbers, dates, or counts.
- Don't restate what tooling enforces (ESLint, formatter): their config is the source of truth and wins over written rules.

## Instruction layout

- `AGENTS.md` (this file and nested ones): short, always-relevant rules and facts. Nested files add local rules for their folder.
- Longer, repeatable procedures (e.g. "migrate a Material component to ids") belong in skills/prompt files, not here, so they are loaded only when needed.
- Skills live in `.claude/skills/<name>/SKILL.md` (Agent Skills format). If your tool does not load them automatically, check their descriptions and read the matching `SKILL.md` before such a task.
