import { BaseCanvasObject, CanvasObject, IVector, Viewport } from '../../../../../active-canvas/src/public-api';

export class ClosedContourObject extends BaseCanvasObject implements CanvasObject {
    vertices: IVector[];
    hexColor: string;
    order: number;
    lineThicnses: number = 8;

    constructor(vertices: IVector[], hexColor: string, order: number = 10) {
        super();

        this.vertices = vertices;
        this.hexColor = hexColor;
        this.order = order;
    }

    public drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        if (this.vertices.length < 3) {
            return;
        }

        ctx.beginPath();
        let point: IVector = viewport.getViewportPosition(this.vertices[0]);
        ctx.moveTo(point.x, point.y);
        for (let i = 1; i < this.vertices.length; ++i) {
            point = viewport.getViewportPosition(this.vertices[i]);
            ctx.lineTo(point.x, point.y);
        }

        ctx.lineWidth = this.lineThicnses;
        ctx.strokeStyle = this.hexColor;
        ctx.closePath();

        ctx.globalAlpha = 0.25;
        ctx.fillStyle = this.hexColor;
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.stroke();
        ctx.lineWidth = 1;
    }

    public getOrder(): number {
        return this.order;
    }
}
