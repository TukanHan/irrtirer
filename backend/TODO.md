# Backend TODO

Priorities: **Must** - needed to keep the project safe to change, **Should** - worth doing soon, **Could** - nice to have.

## Tests

Setup: xUnit v3, one test project per library (`Irrtirer.Generator.Tests`, `Irrtirer.Library.Tests`), all run by `dotnet test`.

- **Must** - Quality tests for full generation in `Irrtirer.Generator.Tests`. Input (mesh, pixels, tiles) is loaded from saved files, not produced by `Irrtirer.Library`, so triangulation changes do not affect it. Run it and check invariants of the result instead of exact output:
    - tiles do not overlap,
    - tiles do not stick out of their sector beyond a tolerance,
    - coverage ratio stays above a threshold.
- **Should** - Unit tests for geometry helpers (Generator) and triangulation (Library).

## Bug fixes

- **Should** - `ProcessHub`: async lambdas on events swallow exceptions.
- **Should** - `ProcessHub`: error logs lose stack traces.
- **Should** - Nullable warnings: possible null references in models and events.

## Security

- **Should** - ImageSharp: 6 vulnerabilities fixed only in 4.x, which requires a paid license. Alternative: decode the image in the browser and send pixels.

## Refactor

- **Could** - Replace `[Obsolete]` used as TODO markers with real changes.
- **Could** - Remove `Line`, `Triangle` and the point-in-polygon helper duplicated in `Irrtirer.Generator` and `Irrtirer.Library`.
- **Could** - Add analyzers and `.editorconfig`, then modernize syntax with `dotnet format`.

## Later: run the generator in the browser (WebAssembly)

- **Could** - Generator takes raw pixels instead of an encoded image.
- **Could** - Single entry point with a progress callback instead of SignalR-oriented events.
- **Could** - Proof of concept: generator compiled to WASM, running in a Web Worker, generation time measured.
- **Could** - If the PoC is fast enough: triangulation in the browser, drop the Web API, host on GitLab Pages.
