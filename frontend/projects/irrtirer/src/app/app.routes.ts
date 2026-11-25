import { Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { ProjectComponent } from './project/project.component';
import { Tool } from './tool/tool';

export const routes: Routes = [
    { path: '', redirectTo: 'project', pathMatch: 'full' },
    {
        path: 'tool',
        component: Tool,
        loadChildren: () => import('./tool/tool.routes').then((x) => x.toolRoutes),
    },
    { path: 'project', component: ProjectComponent },
    { path: 'author', component: AuthorComponent },
];
