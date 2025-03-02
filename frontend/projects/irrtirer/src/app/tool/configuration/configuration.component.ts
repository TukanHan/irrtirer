import { AfterViewInit, ChangeDetectionStrategy, Component, Signal, signal, WritableSignal } from '@angular/core';
import { MosaicConfig } from '../../core/models/mosaic-project.model';
import { selectMosaicConfig } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Store } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { DialogData } from '../../shared/dialog/dialog-data.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { MosaicProjectActions } from '../../core/state/mosaic-project/mosaic-project.actions';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToolView, ToolViewInitSetting } from '../tool-view.interface';
import { ToolService } from '../tool.service';
import { IActiveCanvas } from '../../../../../active-canvas/src/lib/models/canvas/active-canvas.interface';
import { ImageObject } from '../../shared/canvas-objects/image-object';
import { Vector } from '../../core/models/math/vector.model';

@Component({
    selector: 'app-configuration',
    imports: [MatButtonModule, CommonModule, ProjectComponent, TranslateModule],
    templateUrl: './configuration.component.html',
    styleUrl: './configuration.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationComponent implements ToolView, AfterViewInit {
    protected mosaicConfigSignal: Signal<MosaicConfig> = this.store.selectSignal(selectMosaicConfig);

    protected openedViewSignal: WritableSignal<'project' | null> = signal(null);

    private activeCanvas: IActiveCanvas;

    private imageObject: ImageObject;

    constructor(
        private store: Store,
        private dialog: MatDialog,
        private translate: TranslateService
    ) {}

    protected openProjectSettings(): void {
        this.openedViewSignal.set('project');
    }

    protected returnToMainView(): void {
        this.openedViewSignal.set(null);
        this.drawImage(this.mosaicConfigSignal(), false);
    }

    protected rejectProject(): void {
        const dialogData: DialogData = {
            title: this.translate.instant('tool.config.menu.rejectProject'),
            message: this.translate.instant('tool.config.menu.rejectProjectWarning'),
        };

        this.dialog
            .open(DialogComponent, { data: dialogData })
            .afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(MosaicProjectActions.projectCanceled());
                    this.drawImage(this.mosaicConfigSignal(), false);
                }
            });
    }

    public ngAfterViewInit(): void {
        queueMicrotask(() => this.drawImage(this.mosaicConfigSignal(), false));
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

    public sectionEntered(activeCanvas: IActiveCanvas): ToolViewInitSetting {
        this.activeCanvas = activeCanvas;
        return { ribbon: [] };
    }

    protected onImagePreviewChanged(mosaicConfig: MosaicConfig): void {
        this.drawImage(mosaicConfig, true);
    }
}
