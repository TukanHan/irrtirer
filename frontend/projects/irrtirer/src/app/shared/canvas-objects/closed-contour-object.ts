import { BaseCanvasObject, CanvasObject, IVector, Viewport } from '../../../../../active-canvas/src/public-api';

export class ClosedContourObject extends BaseCanvasObject implements CanvasObject {
    constructor(
        private readonly vertices: IVector[],
        private readonly hexColor: string,
        private readonly order: number = 10,
        private readonly baseLineThickness: number = 8,
    ) {
        super();
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

        ctx.lineWidth = this.baseLineThickness * viewport.scaleFactor;
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
