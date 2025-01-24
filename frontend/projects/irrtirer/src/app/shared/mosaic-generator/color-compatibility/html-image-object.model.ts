import { Color } from '../../../core/models/color.model';
import { Rect } from '../../../core/models/rect.model';
import { Size } from '../../../core/models/size.interface';
import { Vector } from '../../../core/models/vector.model';
import { BluredImageObject } from './blured-image-object.model';
import { GaussianBlurWithMask } from './gaussian-blur-with-mask';
import { ImageObject } from './image-object.inteface';
import { PolygonRasterizationTool } from './polygon-rasterization-tool';

export class HtmlImageObject implements ImageObject {
    constructor(private textureColors: Color[], private imageRect: Rect, private textureSize: Size) {}

    getBluredImage(worldRadial: number, polygon: Vector[]): BluredImageObject {
        const gaussianBlurTool: GaussianBlurWithMask = new GaussianBlurWithMask(this.textureColors, this.textureSize);
        const rasterizationTool: PolygonRasterizationTool = new PolygonRasterizationTool(this.imageRect, this.textureSize);

        const pixelMask: boolean[] = rasterizationTool.rasterizePolygonInRange(polygon);

        const radial: number = this.WorldUnitToPixels(worldRadial);
        const blured = gaussianBlurTool.blur(pixelMask, radial, 1);

        return new BluredImageObject(blured, this.textureSize, this.imageRect);
    }

    private WorldUnitToPixels(worldDistance: number): number {
        const pixePerUnit: number = this.textureSize.height / this.imageRect.height;
        return pixePerUnit * worldDistance;
    }

    public static restore(obj: HtmlImageObject): HtmlImageObject {
        Object.setPrototypeOf(obj, HtmlImageObject.prototype);
        return obj;
    }
}
