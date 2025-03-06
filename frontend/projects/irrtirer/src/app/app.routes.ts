import { Routes } from '@angular/router';
import { ToolComponent } from './tool/tool.component';
import { AuthorComponent } from './author/author.component';
import { ProjectComponent } from './project/project.component';
import { TrayComponent } from './tool/tray/tray.component';
import { SectorsComponent } from './tool/sectors/sectors.component';
import { projectExistGuard } from './core/guards/project-exist.guard';
import { MosaicGenerationComponent } from './tool/mosaic-generation/mosaic-generation.component';
import { sectorsSelectedGuard } from './core/guards/sectors-selected.guard';
import { ConfigurationComponent } from './tool/configuration/configuration.component';
import { TrayMenuComponent } from './tool/tray/tray-menu/tray-menu.component';
import { RandomTilesComponent } from './tool/tray/random-tiles/random-tiles.component';

export const routes: Routes = [
    { path: '', redirectTo: 'project', pathMatch: 'full' },
    {
        path: 'tool',
        component: ToolComponent,
        children: [
            { path: '', redirectTo: 'config', pathMatch: 'full' },
            { path: 'config', component: ConfigurationComponent },
            {
                path: 'tray',
                component: TrayComponent,
                canActivate: [projectExistGuard],
                children: [
                    { path: '', component: TrayMenuComponent },
                    { path: 'random', component: RandomTilesComponent },
                ],
            },
            { path: 'sectors', component: SectorsComponent, canActivate: [projectExistGuard] },
            { path: 'generating', component: MosaicGenerationComponent, canActivate: [projectExistGuard, sectorsSelectedGuard] },
        ],
    },
    { path: 'project', component: ProjectComponent },
    { path: 'author', component: AuthorComponent },
];
