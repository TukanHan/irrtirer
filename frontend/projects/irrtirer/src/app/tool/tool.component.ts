import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectMosaicProject, selectSectors } from '../core/state/mosaic-project/mosaic-project.selectors';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { RibbonComponent } from './ribbon/ribbon.component';
import { ToolService } from './tool.service';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActiveCanvasComponent } from '../../../../active-canvas/src/public-api';
import { ToolView } from './tool-view.interface';
import { RibbonAction } from './ribbon/ribbon-action.interface';
import { ThemeService } from '../core/services/theme/theme.service';
import { CanvasOptions } from '../../../../active-canvas/src/lib/models/canvas/canvas-options.interface';
import { ThemeMode } from '../core/models/user-preferences.interface';

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
        CommonModule,
        RibbonComponent,
        ActiveCanvasComponent
    ],
    providers: [ToolService],
    templateUrl: './tool.component.html',
    styleUrl: './tool.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolComponent {
    private readonly store = inject(Store);

    protected readonly translate = inject(TranslateService);

    private readonly destroyRef = inject(DestroyRef);

    protected readonly tilesLinkDisabled$ = this.store.select(selectMosaicProject).pipe(
        takeUntilDestroyed(this.destroyRef),
        map((mosaicProject) => !mosaicProject)
    );

    protected readonly sectorsLinkDisabled$ = this.store.select(selectMosaicProject).pipe(
        takeUntilDestroyed(this.destroyRef),
        map((mosaicProject) => !mosaicProject)
    );

    protected readonly mosaicGeneratingLinkDisabled$ = this.store.select(selectSectors).pipe(
        takeUntilDestroyed(this.destroyRef),
        map((sectors) => !sectors?.length)
    );

    protected readonly activeCanvas = viewChild.required<ActiveCanvasComponent>('activeCanvas');

    protected readonly ribbonActions = signal<RibbonAction[]>([]);

    private readonly themeMode = toSignal<ThemeMode>(inject(ThemeService).theme$);

    protected readonly canvasOptions = computed<CanvasOptions>(() =>({
        canvasGridColor: this.themeMode() === "dark" ? "#3f3f3f" : "#b3b3b3",
    }));

    protected onActivate(view: ToolView): void {
        const viewSetting = view.sectionEntered(this.activeCanvas());
        this.ribbonActions.set(viewSetting.ribbon);
    }

    protected onDeactivate(): void {
        this.ribbonActions.set([]);
        this.activeCanvas().removeObjects();
    }
}
