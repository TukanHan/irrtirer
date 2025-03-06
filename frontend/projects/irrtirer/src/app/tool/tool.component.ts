import { ChangeDetectionStrategy, Component, DestroyRef, signal, Signal, viewChild, WritableSignal } from '@angular/core';
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
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActiveCanvasComponent } from '../../../../active-canvas/src/public-api';
import { ToolView } from './tool-view.interface';
import { RibbonAction } from './ribbon/ribbon-action.interface';

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
    protected tilesLinkDisabled$ = this.store.select(selectMosaicProject).pipe(
        takeUntilDestroyed(this.destroyRef),
        map((mosaicProject) => !mosaicProject)
    );

    protected sectorsLinkDisabled$ = this.store.select(selectMosaicProject).pipe(
        takeUntilDestroyed(this.destroyRef),
        map((mosaicProject) => !mosaicProject)
    );

    protected mosaicGeneratingLinkDisabled$ = this.store.select(selectSectors).pipe(
        takeUntilDestroyed(this.destroyRef),
        map((sectors) => !sectors?.length)
    );

    protected activeCanvas: Signal<ActiveCanvasComponent> = viewChild('activeCanvas');

    protected ribbonActionsSignal: WritableSignal<RibbonAction[]> = signal([]);

    constructor(
        private store: Store,
        protected translate: TranslateService,
        protected toolService: ToolService,
        private destroyRef: DestroyRef
    ) {}

    protected onActivate(view: ToolView): void {
        const viewSetting = view.sectionEntered(this.activeCanvas());
        this.ribbonActionsSignal.set(viewSetting.ribbon);
    }

    protected onDeactivate(): void {
        this.ribbonActionsSignal.set([]);
        this.activeCanvas().removeObjects();
    }
}
