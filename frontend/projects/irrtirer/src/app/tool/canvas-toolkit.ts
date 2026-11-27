import { computed, inject, Service } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { IActiveCanvas, Viewport } from 'active-canvas';
import { saveAs } from '../core/helpers/download-helper';
import { ImageHelper } from '../core/helpers/image-helper';
import { Size } from '../core/models/math/size.interface';
import { Vector } from '../core/models/math/vector.model';
import { MosaicConfig } from '../core/models/mosaic-project.model';
import { ThemeMode } from '../core/models/user-preferences.interface';
import { ThemeSwitcher } from '../core/services/theme-switcher/theme-switcher';
import { ImageObject } from '../shared/canvas-objects/image-object';
import { SnapshotOptionsDialog } from './snapshot-options-dialog/snapshot-options-dialog';
import { SnapshotOptions } from './snapshot-options-dialog/snapshot-options.interface';

@Service({ autoProvided: false })
export class CanvasToolkit {
    private readonly matDialog = inject(MatDialog);

    private readonly themeMode = toSignal<ThemeMode>(inject(ThemeSwitcher).theme$);

    public readonly canvasGridColor = computed<string>(() => (this.themeMode() === 'dark' ? '#3f3f3f' : '#d0d0d0'));

    public readonly backgroundColor = computed<string>(() => (this.themeMode() === 'dark' ? '#1e2023' : '#ffffff'));

    public static async createImageObject(mosaicConfig: MosaicConfig): Promise<ImageObject> {
        const image = await ImageHelper.getImageObjectBySrc(mosaicConfig.base64Image);

        const imageSize: Size = {
            height: (image.height / image.width) * mosaicConfig.mosaicWidth,
            width: mosaicConfig.mosaicWidth,
        };

        return new ImageObject(image, Vector.zero, imageSize);
    }

    public static calculateZoomForImage(imageSize: Size, viewport: Viewport): number {
        const imageZoom: Size = {
            height: ((imageSize.height * 1.1) / viewport.cmSize.height) * viewport.zoom,
            width: ((imageSize.width * 1.1) / viewport.cmSize.width) * viewport.zoom,
        };

        return Math.max(imageZoom.height, imageZoom.width);
    }

    public openTakeSnapshotDialog(activeCanvas: IActiveCanvas, fileName: string): void {
        this.matDialog
            .open<SnapshotOptionsDialog, unknown, SnapshotOptions>(SnapshotOptionsDialog)
            .afterClosed()
            .subscribe((result) => {
                if (!result) {
                    return;
                }

                activeCanvas
                    .saveAsImage({
                        scaleFactor: result.scaleFactor,
                        backgroundColor: result.transparentBackground ? undefined : this.backgroundColor(),
                    })
                    .then((blob) => saveAs(blob, fileName));
            });
    }
}
