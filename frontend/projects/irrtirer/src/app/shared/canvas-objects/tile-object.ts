import { BaseCanvasObject, CanvasObject, IVector, Viewport } from "../../../../../active-canvas/src/public-api";


export class TileObject extends BaseCanvasObject implements CanvasObject {
    constructor(private readonly vertices: IVector[], private readonly hexColor: string) {
        super();
    }

    public drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        ctx.beginPath();
        let point: IVector = viewport.getViewportPosition(this.vertices[0]);
        ctx.moveTo(point.x, point.y);
        for (let i = 1; i < this.vertices.length; ++i) {
            point = viewport.getViewportPosition(this.vertices[i]);
            ctx.lineTo(point.x, point.y);
        }

        ctx.closePath();

        ctx.fillStyle = this.hexColor;
        ctx.fill();
    }

    public getOrder(): number {
        return 100;
    }
}
