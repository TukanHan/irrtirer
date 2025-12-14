import { computed, inject, Injectable } from '@angular/core';
import { ImageObject } from '../shared/canvas-objects/image-object';
import { Vector } from '../core/models/math/vector.model';
import { Size } from '../core/models/math/size.interface';
import { ImageHelper } from '../core/helpers/image-helper';
import { Viewport } from '../../../../active-canvas/src/public-api';
import { MosaicConfig } from '../core/models/mosaic-project.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { ThemeMode } from '../core/models/user-preferences.interface';
import { ThemeService } from '../core/services/theme/theme.service';
import { MatDialog } from '@angular/material/dialog';
import { SnapshotOptionsDialogComponent } from './snapshot-options-dialog/snapshot-options-dialog.component';
import { SnapshotOptions } from './snapshot-options-dialog/snapshot-options.interface';
import { IActiveCanvas } from '../../../../active-canvas/src/lib/models/canvas/active-canvas.interface';

@Injectable()
export class ToolService {
    private readonly matDialog = inject(MatDialog);

    private readonly themeMode = toSignal<ThemeMode>(inject(ThemeService).theme$);

    public readonly canvasGridColor = computed<string>(() =>
        this.themeMode() === 'dark' ? '#3f3f3f' : '#b3b3b3'
    );

    public readonly backgroundColor = computed<string>(() =>
        this.themeMode() === 'dark' ? '#1e2023' : '#ffffff'
    );

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
            height: (imageSize.height * 1.1) / viewport.cmSize.height * viewport.zoom,
            width: (imageSize.width * 1.1) / viewport.cmSize.width * viewport.zoom,
        };

        return Math.max(imageZoom.height, imageZoom.width);
    }

    public openTakeSnapshotDialog(activeCanvas: IActiveCanvas, fileName: string): void {
        this.matDialog.open<SnapshotOptionsDialogComponent, unknown, SnapshotOptions>(SnapshotOptionsDialogComponent)
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
                    .then((blob) => ImageHelper.downloadBlobAsImage(blob, fileName));
            });
    }
}
