import { UnitConverter } from '../../../core/helpers/unit-converter';
import { Vector } from '../../../core/models/point.model';
import { Size } from '../../../core/models/size.interface';
import { CanvasObject } from './canvas-object.interface';
import { Viewport } from './viewport.class';

export class ImageObject implements CanvasObject {
    image: HTMLImageElement;

    position: Vector;

    size: Size;

    constructor(image: HTMLImageElement, position: Vector, size: Size) {
        this.image = image;
        this.position = position;
        this.size = size;
    }

    drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport) {
        const viewCmWidth = UnitConverter.pxToCm(viewport.pxSize.width) * viewport.zoom;
        const viewCmHeight = UnitConverter.pxToCm(viewport.pxSize.height) * viewport.zoom;

        const imageCanvasSize: Size = {
            width: (this.size.width / viewCmWidth) * viewport.pxSize.width,
            height: (this.size.height / viewCmHeight) * viewport.pxSize.height,
        };

        const position = viewport.getViewportPosition(this.position);
        const centeredPosition: Vector = {
            x: position.x - imageCanvasSize.width / 2,
            y: position.y - imageCanvasSize.height / 2,
        };

        ctx.drawImage(this.image, centeredPosition.x, centeredPosition.y, imageCanvasSize.width, imageCanvasSize.height);
    }
}
