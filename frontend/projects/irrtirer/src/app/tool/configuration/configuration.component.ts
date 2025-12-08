import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { MosaicConfig } from '../../core/models/mosaic-project.model';
import { selectMosaicConfig } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Store } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { ToolView, ToolViewInitSetting } from '../tool-view.interface';
import { ToolService } from '../tool.service';
import { IActiveCanvas } from '../../../../../active-canvas/src/lib/models/canvas/active-canvas.interface';
import { ImageObject } from '../../shared/canvas-objects/image-object';
import { Vector } from '../../core/models/math/vector.model';
import { RouterOutlet } from '@angular/router';
import { ConfigurationService } from './configuration.service';
import { RibbonAction } from '../ribbon/ribbon-action.interface';
import { outputToObservable, takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, map, of } from 'rxjs';

@Component({
    selector: 'app-configuration',
    imports: [MatButtonModule, TranslateModule, RouterOutlet],
    providers: [ConfigurationService],
    templateUrl: './configuration.component.html',
    styleUrl: './configuration.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationComponent implements ToolView {
    private readonly store = inject(Store);

    private readonly destroyRef = inject(DestroyRef);

    private readonly configService = inject(ConfigurationService);

    protected readonly mosaicConfig = this.store.selectSignal<MosaicConfig>(selectMosaicConfig);

    private readonly imageObject = signal<ImageObject | null>(null);

    private readonly imageChanged$ = toObservable(this.configService.imageChange);

    protected readonly ribbonActions: RibbonAction[] = [
        {
            iconName: 'recenter',
            visibility: computed(() => (this.imageObject() ? 'on' : 'disabled')),
            onClick: () => {
                this.focusOnImage(this.imageObject()!);
                this.activeCanvas.redraw();
            },
        },
    ];

    private activeCanvas: IActiveCanvas;

    public sectionEntered(activeCanvas: IActiveCanvas, shouldFocusOnObject: boolean): ToolViewInitSetting {
        this.activeCanvas = activeCanvas;

        const canvasLoaded$ = shouldFocusOnObject ? outputToObservable(this.activeCanvas.canvasLoaded).pipe(map(() => true)) : of(false);

        combineLatest([canvasLoaded$, this.imageChanged$])
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(([shouldFocusOnObject, imageChange]) => {
                const shouldFocus = imageChange.shouldFocus || shouldFocusOnObject;
                this.drawImage(imageChange.mosaicConfig, shouldFocus);
            });

        return { ribbon: this.ribbonActions };
    }

    private async drawImage(mosaicConfig: MosaicConfig | null, focusOn: boolean): Promise<void> {
        let imageObject: ImageObject | null = this.imageObject();
        imageObject?.removeObject();
        imageObject = null;

        if (mosaicConfig) {
            imageObject = await ToolService.createImageObject(mosaicConfig);
            this.activeCanvas.addCanvasObject(imageObject, false);

            if (focusOn) {
                this.focusOnImage(imageObject);
            }
        }

        this.imageObject.set(imageObject);
        this.activeCanvas.redraw();
    }

    private focusOnImage(imageObject: ImageObject): void {
        const zoom = ToolService.calculateZoomForImage(imageObject.size, this.activeCanvas.viewport);
        this.activeCanvas.setViewport(zoom, Vector.zero);
    }

    protected onRouterChange(): void {
        this.configService.emitImageChange(this.mosaicConfig(), false);
    }
}
