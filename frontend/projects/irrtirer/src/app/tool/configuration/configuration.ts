import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { MosaicConfig } from '../../core/models/mosaic-project.model';
import { selectMosaicConfig } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Store } from '@ngrx/store';
import { ToolView, ToolViewInitSetting } from '../tool-view.interface';
import { CanvasToolkit } from '../canvas-toolkit';
import { IActiveCanvas } from '../../../../../active-canvas/src/lib/models/canvas/active-canvas.interface';
import { ImageObject } from '../../shared/canvas-objects/image-object';
import { Vector } from '../../core/models/math/vector.model';
import { RouterOutlet } from '@angular/router';
import { ConfigurationEventBus } from './configuration-event-bus';
import { RibbonAction } from '../ribbon/ribbon-action.interface';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { skip } from 'rxjs';

@Component({
    selector: 'app-configuration',
    imports: [RouterOutlet],
    providers: [ConfigurationEventBus],
    templateUrl: './configuration.html',
    styleUrl: './configuration.scss',
})
export class Configuration implements ToolView {
    private readonly store = inject(Store);

    private readonly destroyRef = inject(DestroyRef);

    private readonly configEventBus = inject(ConfigurationEventBus);

    private readonly canvasToolkit = inject(CanvasToolkit);

    protected readonly mosaicConfig = this.store.selectSignal(selectMosaicConfig);

    private readonly imageObject = signal<ImageObject | null>(null);

    private readonly imageChanged$ = toObservable(this.configEventBus.imageChange);

    protected readonly ribbonActions: RibbonAction[] = [
        {
            iconName: 'crop',
            tooltipKey: 'tool.ribbon.takeSnapshot',
            visibility: signal('on'),
            onClick: () => this.canvasToolkit.openTakeSnapshotDialog(this.activeCanvas, 'configuration_snapshot.png'),
        },
        {
            iconName: 'recenter',
            tooltipKey: 'tool.ribbon.focusOnImage',
            visibility: computed(() => (this.imageObject() ? 'on' : 'disabled')),
            onClick: () => {
                this.focusOnImage(this.imageObject()!);
                this.activeCanvas.redraw();
            },
        },
    ];

    private activeCanvas!: IActiveCanvas;

    public sectionEntered(activeCanvas: IActiveCanvas, shouldFocusOnObject: boolean): ToolViewInitSetting {
        this.activeCanvas = activeCanvas;

        this.imageChanged$.pipe(takeUntilDestroyed(this.destroyRef), skip(1)).subscribe((imageChange) => {
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
            imageObject = await CanvasToolkit.createImageObject(mosaicConfig);
            this.activeCanvas.addCanvasObject(imageObject, false);

            if (focusOn) {
                this.focusOnImage(imageObject);
            }
        }

        this.imageObject.set(imageObject);
        this.activeCanvas.redraw();
    }

    private focusOnImage(imageObject: ImageObject): void {
        const zoom = CanvasToolkit.calculateZoomForImage(imageObject.size, this.activeCanvas.viewport());
        this.activeCanvas.setViewport(zoom, Vector.zero);
    }

    protected onRouterChange(): void {
        this.configEventBus.emitImageChange(this.mosaicConfig()!, false);
    }
}
