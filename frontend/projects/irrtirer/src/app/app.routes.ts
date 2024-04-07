import { Routes } from '@angular/router';
import { ToolComponent } from './tool/tool.component';
import { AuthorComponent } from './author/author.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './tool/home/home.component';
import { TrayComponent } from './tool/tray/tray.component';

export const routes: Routes = [
    { path: '', redirectTo: 'project', pathMatch: 'full' },
    {
        path: 'tool',
        component: ToolComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'tray', component: TrayComponent },
        ],
    },
    { path: 'project', component: ProjectComponent },
    { path: 'author', component: AuthorComponent },
];
