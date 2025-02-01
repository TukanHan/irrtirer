import { ColorHelper } from '../../../core/helpers/color-helper';
import { Color } from '../../../core/models/color.model';
import { Vector } from '../../../core/models/vector.model';
import { CanvasObject } from '../models/canvas-object.interface';
import { Viewport } from '../models/viewport.class';

export class TileObject implements CanvasObject {
    public isVisible: boolean = true;

    constructor(private vertices: Vector[], private color: Color) {}

    drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        ctx.beginPath();
        let point: Vector = viewport.getViewportPosition(this.vertices[0]);
        ctx.moveTo(point.x, point.y);
        for (let i = 1; i < this.vertices.length; ++i) {
            point = viewport.getViewportPosition(this.vertices[i]);
            ctx.lineTo(point.x, point.y);
        }

        ctx.closePath();

        ctx.fillStyle = ColorHelper.rgbToHex(this.color);
        ctx.fill();
    }

    getOrder(): number {
        return 100;
    }
}
