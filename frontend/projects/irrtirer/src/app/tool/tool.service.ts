import { Injectable } from '@angular/core';
import { ImageObject } from '../shared/canvas-objects/image-object';
import { Vector } from '../core/models/math/vector.model';
import { Size } from '../core/models/math/size.interface';
import { ImageHelper } from '../core/helpers/image-helper';
import { Viewport } from '../../../../active-canvas/src/public-api';
import { MosaicConfig } from '../core/models/mosaic-project.model';

@Injectable()
export class ToolService {
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
}
