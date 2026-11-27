import { Routes } from '@angular/router';
import { projectExistGuard } from '../core/guards/project-exist.guard';
import { sectorsSelectedGuard } from '../core/guards/sectors-selected.guard';
import { ConfigMenu } from './configuration/config-menu/config-menu';
import { ConfigProject } from './configuration/config-project/config-project';
import { Configuration } from './configuration/configuration';
import { MosaicGeneration } from './mosaic-generation/mosaic-generation';
import { SectorContourEdition } from './sectors/sector-contour-edition/sector-contour-edition';
import { SectorPropertyEditor } from './sectors/sector-property-editor/sector-property-editor';
import { Sectors } from './sectors/sectors';
import { SectorsContoursList } from './sectors/sectors-contours-list/sectors-contours-list';
import { RandomTiles } from './tray/random-tiles/random-tiles';
import { TileDetail } from './tray/tile-detail/tile-detail';
import { Tray } from './tray/tray';
import { TrayMenu } from './tray/tray-menu/tray-menu';

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
        component: Sectors,
        canActivate: [projectExistGuard],
        children: [
            { path: '', component: SectorsContoursList },
            { path: ':id/property', component: SectorPropertyEditor },
            { path: ':id/contour', component: SectorContourEdition },
            { path: 'contour', component: SectorContourEdition },
        ],
    },
    {
        path: 'generating',
        component: MosaicGeneration,
        canActivate: [projectExistGuard, sectorsSelectedGuard],
    },
];
