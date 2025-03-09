import { AfterViewInit, ChangeDetectionStrategy, Component, computed, DestroyRef, signal, Signal, WritableSignal } from '@angular/core';
import { MosaicConfig } from '../../core/models/mosaic-project.model';
import { selectMosaicConfig } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Store } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ToolView, ToolViewInitSetting } from '../tool-view.interface';
import { ToolService } from '../tool.service';
import { IActiveCanvas } from '../../../../../active-canvas/src/lib/models/canvas/active-canvas.interface';
import { ImageObject } from '../../shared/canvas-objects/image-object';
import { Vector } from '../../core/models/math/vector.model';
import { RouterOutlet } from '@angular/router';
import { ConfigurationService } from './configuration.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RibbonAction } from '../ribbon/ribbon-action.interface';

@Component({
    selector: 'app-configuration',
    imports: [MatButtonModule, CommonModule, TranslateModule, RouterOutlet],
    providers: [ConfigurationService],
    templateUrl: './configuration.component.html',
    styleUrl: './configuration.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationComponent implements ToolView, AfterViewInit {
    protected mosaicConfigSignal: Signal<MosaicConfig> = this.store.selectSignal(selectMosaicConfig);

    private activeCanvas: IActiveCanvas;

    private imageObjectSignal: WritableSignal<ImageObject> = signal(null);

    protected ribbonActions: RibbonAction[] = [
        {
            iconName: 'recenter',
            visibility: computed(() => this.imageObjectSignal() ? 'on' : 'disabled'),
            onClick: () => {
                this.focusOnImage(this.imageObjectSignal());
                this.activeCanvas.redraw();
            } 
        }
    ]

    constructor(
        private store: Store,
        private configService: ConfigurationService,
        private destroyRef: DestroyRef
    ) {}

    public sectionEntered(activeCanvas: IActiveCanvas): ToolViewInitSetting {
        this.activeCanvas = activeCanvas;
        return { ribbon: this.ribbonActions };
    }

    public ngAfterViewInit(): void {
        queueMicrotask(() => this.subscribeOnMosaicConfigChange());
    }

    protected subscribeOnMosaicConfigChange(): void {
        this.configService.imageChange$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((imageChange) => this.drawImage(imageChange?.mosaicConfig, imageChange?.shouldFocus));
    }

    private async drawImage(mosaicConfig: MosaicConfig, focusOn: boolean): Promise<void> {
        let imageObject: ImageObject = this.imageObjectSignal();
        imageObject?.removeObject();
        imageObject = null;

        if (mosaicConfig) {
            imageObject = await ToolService.createImageObject(mosaicConfig);
            this.activeCanvas.addCanvasObject(imageObject, false);

            if (focusOn) {
                this.focusOnImage(imageObject);
            }
        }

        this.imageObjectSignal.set(imageObject);
        this.activeCanvas.redraw();
    }

    private focusOnImage(imageObject: ImageObject): void {
        const zoom = ToolService.calculateZoomForImage(imageObject.size, this.activeCanvas.viewport);
        this.activeCanvas.setViewport(zoom, Vector.zero);
    }

    protected onRouterChange(): void {
        this.configService.emitImageChange(this.mosaicConfigSignal(), false);
    }
}