import { Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { ProjectComponent } from './project/project.component';
import { ToolComponent } from './tool/tool.component';

export const routes: Routes = [
    { path: '', redirectTo: 'project', pathMatch: 'full' },
    {
        path: 'tool',
        component: ToolComponent,
        loadChildren: () => import('./tool/tool.routes').then((x) => x.toolRoutes),
    },
    { path: 'project', component: ProjectComponent },
    { path: 'author', component: AuthorComponent },
];
