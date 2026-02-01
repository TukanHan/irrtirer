import { BaseCanvasObject, CanvasObject, IVector, Viewport } from "../../../../../active-canvas/src/public-api";

const BASE_LINE_THICKNESS: number = 10;
const BASE_POINT_RADIUS: number = 10;

export class OpenedContourObject extends BaseCanvasObject implements CanvasObject {
    constructor(
        private readonly vertices: IVector[],
        private readonly selectedIndex: number,
        private readonly hexColor: string,
        private readonly order: number = 100
    ) {
        super();
    }

    public drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        if (this.vertices.length >= 2) {
            const lineThickness = BASE_LINE_THICKNESS * viewport.scaleFactor;
            ctx.lineWidth = lineThickness;
            ctx.strokeStyle = this.hexColor;
            ctx.setLineDash([lineThickness]);

            ctx.beginPath();
            ctx.globalAlpha = 0.25;
            let point: IVector = viewport.getViewportPosition(this.vertices.at(-1)!);
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

    private drawPoint(ctx: CanvasRenderingContext2D, viewport: Viewport, position: IVector): void {
        const viewportPosition = viewport.getViewportPosition(position);

        ctx.beginPath();
        const pointRadius = BASE_POINT_RADIUS * viewport.scaleFactor;
        ctx.arc(viewportPosition.x, viewportPosition.y, pointRadius, 0, 2 * Math.PI);

        ctx.fillStyle = this.hexColor;
        ctx.fill();
    }

    public getOrder(): number {
        return this.order;
    }
}
