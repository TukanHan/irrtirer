import { Routes } from '@angular/router';
import { Configuration } from './configuration/configuration';
import { ConfigMenu } from './configuration/config-menu/config-menu';
import { ConfigProject } from './configuration/config-project/config-project';
import { Tray } from './tray/tray';
import { projectExistGuard } from '../core/guards/project-exist.guard';
import { RandomTiles } from './tray/random-tiles/random-tiles';
import { TrayMenu } from './tray/tray-menu/tray-menu';
import { TileDetail } from './tray/tile-detail/tile-detail';
import { SectorsComponent } from './sectors/sectors.component';
import { MosaicGeneration } from './mosaic-generation/mosaic-generation';
import { sectorsSelectedGuard } from '../core/guards/sectors-selected.guard';
import { SectorsContoursListComponent } from './sectors/sectors-contours-list/sectors-contours-list.component';
import { SectorPropertyEditorComponent } from './sectors/sector-property-editor/sector-property-editor.component';
import { SectorContourEditionComponent } from './sectors/sector-contour-edition/sector-contour-edition.component';

export const toolRoutes: Routes = [
    { path: '', redirectTo: 'config', pathMatch: 'full' },
    {
        path: 'config',
        component: Configuration,
        children: [
            { path: '', component: ConfigMenu },
            { path: 'project', component: ConfigProject },
        ],
    },
    {
        path: 'tray',
        component: Tray,
        canActivate: [projectExistGuard],
        children: [
            { path: '', component: TrayMenu },
            { path: 'random', component: RandomTiles },
            { path: 'random/:id', component: RandomTiles },
            { path: 'tile/:id', component: TileDetail },
        ],
    },
    {
        path: 'sectors',
        component: SectorsComponent,
        canActivate: [projectExistGuard],
        children: [
            { path: '', component: SectorsContoursListComponent },
            { path: ':id/property', component: SectorPropertyEditorComponent },
            { path: ':id/contour', component: SectorContourEditionComponent },
            { path: 'contour', component: SectorContourEditionComponent },
        ],
    },
    {
        path: 'generating',
        component: MosaicGeneration,
        canActivate: [projectExistGuard, sectorsSelectedGuard],
    },
];
