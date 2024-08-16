import { Routes } from '@angular/router';
import { ToolComponent } from './tool/tool.component';
import { AuthorComponent } from './author/author.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './tool/home/home.component';
import { TrayComponent } from './tool/tray/tray.component';
import { SectorsComponent } from './tool/sectors/sectors.component';
import { projectExistGuard } from './core/guards/project-exist.guard';
import { MosaicGenerationComponent } from './tool/mosaic-generation/mosaic-generation.component';

export const routes: Routes = [
    { path: '', redirectTo: 'project', pathMatch: 'full' },
    {
        path: 'tool',
        component: ToolComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'tray', component: TrayComponent, canActivate: [projectExistGuard] },
            { path: 'sectors', component: SectorsComponent, canActivate: [projectExistGuard] },
            { path: 'generating', component: MosaicGenerationComponent, canActivate: [projectExistGuard] }
        ],
    },
    { path: 'project', component: ProjectComponent },
    { path: 'author', component: AuthorComponent },
];
