import { Routes } from '@angular/router';
import { Author } from './author/author';
import { Project } from './project/project';
import { Tool } from './tool/tool';

export const routes: Routes = [
    { path: '', redirectTo: 'project', pathMatch: 'full' },
    {
        path: 'tool',
        component: Tool,
        loadChildren: () => import('./tool/tool.routes').then((x) => x.toolRoutes),
    },
    { path: 'project', component: Project },
    { path: 'author', component: Author },
];
