import { AsyncPipe } from '@angular/common';
import { Component, computed, DestroyRef, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';
import { CanvasOptions, ActiveCanvas } from 'active-canvas';
import { IdsSideNav, IdsSideNavItem } from 'irr-design-system/side-nav';
import { ProjectArchive } from '../core/services/project-archive/project-archive';
import { selectMosaicProject, selectSectors } from '../core/state/mosaic-project/mosaic-project.selectors';
import { CanvasToolkit } from './canvas-toolkit';
import { Ribbon } from './ribbon/ribbon';
import { RibbonAction } from './ribbon/ribbon-action.interface';
import { ToolView } from './tool-view.interface';

@Component({
    selector: 'app-tool',
    imports: [AsyncPipe, IdsSideNav, IdsSideNavItem, RouterOutlet, Ribbon, ActiveCanvas],
    providers: [CanvasToolkit, ProjectArchive],
    template: `
        <ids-side-nav>
            <ids-side-nav-item link="config" icon="flowsheet" [label]="translate.instant('tool.nav.projectSettings')" />
            <ids-side-nav-item
                link="tray"
                icon="dashboard"
                [label]="translate.instant('tool.nav.tileTrey')"
                [disabled]="tilesLinkDisabled$ | async"
            />
            <ids-side-nav-item
                link="sectors"
                icon="view_in_ar"
                [label]="translate.instant('tool.nav.sectors')"
                [disabled]="sectorsLinkDisabled$ | async"
            />
            <ids-side-nav-item
                link="generating"
                icon="rocket_launch"
                [label]="translate.instant('tool.nav.generation')"
                [disabled]="mosaicGeneratingLinkDisabled$ | async"
            />
        </ids-side-nav>
        <div class="flex flex-col w-full bg-surface">
            <app-ribbon [actions]="ribbonActions()" [viewportSize]="viewportSize()" />
            <div class="flex flex-row w-full flex-1 overflow-hidden">
                <ac-active-canvas #activeCanvas [options]="canvasOptions()" class="flex flex-1" />
                <div class="w-[250px] border-l border-contrast-light">
                    <router-outlet (activate)="onActivate($event)" (deactivate)="onDeactivate()" />
                </div>
            </div>
        </div>
    `,
    host: { class: 'flex h-full' },
})
export class Tool {
    private readonly store = inject(Store);

    protected readonly translate = inject(TranslateService);

    private readonly canvasToolkit = inject(CanvasToolkit);

    private readonly destroyRef = inject(DestroyRef);

    protected readonly tilesLinkDisabled$ = this.store.select(selectMosaicProject).pipe(
        takeUntilDestroyed(this.destroyRef),
        map((mosaicProject) => !mosaicProject),
    );

    protected readonly sectorsLinkDisabled$ = this.store.select(selectMosaicProject).pipe(
        takeUntilDestroyed(this.destroyRef),
        map((mosaicProject) => !mosaicProject),
    );

    protected readonly mosaicGeneratingLinkDisabled$ = this.store.select(selectSectors).pipe(
        takeUntilDestroyed(this.destroyRef),
        map((sectors) => !sectors.length),
    );

    protected readonly activeCanvas = viewChild.required<ActiveCanvas>('activeCanvas');

    protected readonly viewportSize = computed(() => this.activeCanvas().viewport().cmSize);

    protected readonly ribbonActions = signal<RibbonAction[]>([]);

    protected readonly canvasOptions = computed<CanvasOptions>(() => ({
        canvasGridColor: this.canvasToolkit.canvasGridColor(),
    }));

    private wasInitialized: boolean = false;

    protected onActivate(view: ToolView): void {
        const viewSetting = view.sectionEntered(this.activeCanvas(), !this.wasInitialized);
        this.ribbonActions.set(viewSetting.ribbon);
        this.wasInitialized = true;
    }

    protected onDeactivate(): void {
        this.ribbonActions.set([]);
        this.activeCanvas().removeObjects();
    }
}
