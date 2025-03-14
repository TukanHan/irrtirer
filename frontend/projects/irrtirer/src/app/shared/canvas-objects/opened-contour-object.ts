import { BaseCanvasObject, CanvasObject, IVector, Viewport } from "../../../../../active-canvas/src/public-api";


export class OpenedContourObject extends BaseCanvasObject implements CanvasObject {
    private vertices: IVector[];
    private selectedIndex: number;
    private hexColor: string;
    private order: number;

    constructor(vertices: IVector[], selectedIndex: number, hexColor: string, order: number = 100) {
        super();
        this.vertices = vertices;
        this.selectedIndex = selectedIndex;
        this.hexColor = hexColor;
        this.order = order;
    }

    public drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        if (this.vertices.length >= 2) {
            ctx.lineWidth = 10;
            ctx.strokeStyle = this.hexColor;
            ctx.setLineDash([10]);

            ctx.beginPath();
            ctx.globalAlpha = 0.25;
            let point: IVector = viewport.getViewportPosition(this.vertices.at(-1));
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
        ctx.arc(viewportPosition.x, viewportPosition.y, 10, 0, 2 * Math.PI);

        ctx.fillStyle = this.hexColor;
        ctx.fill();
    }

    public getOrder(): number {
        return this.order;
    }
}
