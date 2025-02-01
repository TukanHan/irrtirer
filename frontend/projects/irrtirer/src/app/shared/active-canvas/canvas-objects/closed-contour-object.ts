import { ColorHelper } from '../../../core/helpers/color-helper';
import { Color } from '../../../core/models/color.model';
import { Vector } from '../../../core/models/vector.model';
import { CanvasObject } from '../models/canvas-object.interface';
import { Viewport } from '../models/viewport.class';

export class ClosedContourObject implements CanvasObject {
    vertices: Vector[];
    color: Color;
    order: number;
    lineThicnses: number = 8;

    public isVisible: boolean = true;

    constructor(vertices: Vector[], color: Color, order: number = 10) {
        this.vertices = vertices;
        this.color = color;
        this.order = order;
    }

    drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        if (this.vertices.length < 3) {
            return;
        }

        ctx.beginPath();
        let point: Vector = viewport.getViewportPosition(this.vertices[0]);
        ctx.moveTo(point.x, point.y);
        for (let i = 1; i < this.vertices.length; ++i) {
            point = viewport.getViewportPosition(this.vertices[i]);
            ctx.lineTo(point.x, point.y);
        }

        ctx.lineWidth = this.lineThicnses;
        ctx.strokeStyle = ColorHelper.rgbToHex(this.color);
        ctx.closePath();

        ctx.globalAlpha = 0.25;
        ctx.fillStyle = ColorHelper.rgbToHex(this.color);
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.stroke();
        ctx.lineWidth = 1;
    }

    getOrder(): number {
        return this.order;
    }
}
