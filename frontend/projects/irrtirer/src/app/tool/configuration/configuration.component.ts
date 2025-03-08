import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, Signal } from '@angular/core';
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

    private imageObject: ImageObject;

    constructor(
        private store: Store,
        private configService: ConfigurationService,
        private destroyRef: DestroyRef
    ) {}

    public sectionEntered(activeCanvas: IActiveCanvas): ToolViewInitSetting {
        this.activeCanvas = activeCanvas;
        return { ribbon: [] };
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
        this.imageObject?.removeObject();

        if (mosaicConfig) {
            this.imageObject = await ToolService.createImageObject(mosaicConfig);
            this.activeCanvas.addCanvasObject(this.imageObject, false);

            if (focusOn) {
                const zoom = ToolService.calculateZoomForImage(this.imageObject.size, this.activeCanvas.viewport);
                this.activeCanvas.setViewport(zoom, Vector.zero);
            }
        }

        this.activeCanvas.redraw();
    }

    protected onRouterChange(): void {
        this.configService.emitImageChange(this.mosaicConfigSignal(), false);
    }
}