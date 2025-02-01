import { ColorHelper } from '../../../core/helpers/color-helper';
import { Color } from '../../../core/models/color.model';
import { Vector } from '../../../core/models/vector.model';
import { CanvasObject } from '../models/canvas-object.interface';
import { Viewport } from '../models/viewport.class';

export class OpenedContourObject implements CanvasObject {
    vertices: Vector[];
    selectedIndex: number;
    color: Color;
    order: number;

    public isVisible: boolean = true;

    constructor(vertices: Vector[], selectedIndex: number, color: Color, order: number = 100) {
        this.vertices = vertices;
        this.selectedIndex = selectedIndex;
        this.color = color;
        this.order = order;
    }

    drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        if (this.vertices.length >= 2) {
            ctx.lineWidth = 10;
            ctx.strokeStyle = ColorHelper.rgbToHex(this.color);
            ctx.setLineDash([10]);

            ctx.beginPath();
            ctx.globalAlpha = 0.25;
            let point: Vector = viewport.getViewportPosition(this.vertices.at(-1));
            ctx.moveTo(point.x, point.y);
            point = viewport.getViewportPosition(this.vertices[0]);
            ctx.lineTo(point.x, point.y);
            ctx.stroke();

            ctx.globalAlpha = 0.7;
            ctx.setLineDash([]);

            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            for (let i = 1; i < this.vertices.length; ++i) {
                point = viewport.getViewportPosition(this.vertices[i]);
                ctx.lineTo(point.x, point.y);
            }

            ctx.stroke();
        }

        ctx.lineWidth = 1;
        ctx.globalAlpha = 1;
        if (this.selectedIndex !== -1) {
            this.drawPoint(ctx, viewport, this.vertices[this.selectedIndex]);
        }
    }

    drawPoint(ctx: CanvasRenderingContext2D, viewport: Viewport, position: Vector): void {
        const viewportPosition = viewport.getViewportPosition(position);

        ctx.beginPath();
        ctx.arc(viewportPosition.x, viewportPosition.y, 10, 0, 2 * Math.PI);

        ctx.fillStyle = ColorHelper.rgbToHex(this.color);
        ctx.fill();
    }

    getOrder(): number {
        return this.order;
    }
}
