import { Routes } from '@angular/router';
import { ToolComponent } from './tool/tool.component';
import { AuthorComponent } from './author/author.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
  { path: '', redirectTo: 'project', pathMatch: 'full' },
  { path: 'tool', component: ToolComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'author', component: AuthorComponent },
];
