import { Viewport } from "./viewport.class";

export interface CanvasObject {
    drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport);
    getOrder(): number;
}