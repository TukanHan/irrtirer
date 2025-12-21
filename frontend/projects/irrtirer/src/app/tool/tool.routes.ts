import { Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ConfigMenuComponent } from './configuration/config-menu/config-menu.component';
import { ConfigProjectComponent } from './configuration/config-project/config-project.component';
import { TrayComponent } from './tray/tray.component';
import { projectExistGuard } from '../core/guards/project-exist.guard';
import { RandomTilesComponent } from './tray/random-tiles/random-tiles.component';
import { TrayMenuComponent } from './tray/tray-menu/tray-menu.component';
import { TileDetailComponent } from './tray/tile-detail/tile-detail.component';
import { SectorsComponent } from './sectors/sectors.component';
import { MosaicGenerationComponent } from './mosaic-generation/mosaic-generation.component';
import { sectorsSelectedGuard } from '../core/guards/sectors-selected.guard';
import { SectorsContoursListComponent } from './sectors/sectors-contours-list/sectors-contours-list.component';
import { SectorPropertyEditorComponent } from './sectors/sector-property-editor/sector-property-editor.component';
import { SectorContourEditionComponent } from './sectors/sector-contour-edition/sector-contour-edition.component';

export const toolRoutes: Routes = [
    { path: '', redirectTo: 'config', pathMatch: 'full' },
    {
        path: 'config',
        component: ConfigurationComponent,
        children: [
            { path: '', component: ConfigMenuComponent },
            { path: 'project', component: ConfigProjectComponent },
        ],
    },
    {
        path: 'tray',
        component: TrayComponent,
        canActivate: [projectExistGuard],
        children: [
            { path: '', component: TrayMenuComponent },
            { path: 'random', component: RandomTilesComponent },
            { path: 'random/:id', component: RandomTilesComponent },
            { path: 'tile/:id', component: TileDetailComponent },
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
        ]
    },
    {
        path: 'generating',
        component: MosaicGenerationComponent,
        canActivate: [projectExistGuard, sectorsSelectedGuard],
    },
];
