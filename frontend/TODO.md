# Frontend - TODO

Workspace-wide decisions not made yet and known fixes. Remove an item once done.

## Components

- [ ] Review NgModule imports in components (e.g. `MatInputModule`, `MatDialogModule`): the unused-import check (`unusedStandaloneImports`) skips NgModules, so unused ones go unreported. Prefer importing standalone pieces where available
