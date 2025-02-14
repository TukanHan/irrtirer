import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectMosaicProject, selectSectors } from '../core/state/mosaic-project/mosaic-project.selectors';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tool',
    imports: [
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTooltipModule,
        RouterOutlet,
        RouterLink,
        RouterModule,
        CommonModule
    ],
    templateUrl: './tool.component.html',
    styleUrl: './tool.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolComponent {
    tilesLinkDisabled$ = this.store
        .select(selectMosaicProject)
        .pipe(map((mosaicProject) => !mosaicProject));

    sectorsLinkDisabled$ = this.store
        .select(selectMosaicProject)
        .pipe(map((mosaicProject) => !mosaicProject));

    mosaicGeneratingLinkDisabled$ = this.store
        .select(selectSectors)
        .pipe(map((sectors) => !sectors?.length));

    constructor(private store: Store) {}
}
