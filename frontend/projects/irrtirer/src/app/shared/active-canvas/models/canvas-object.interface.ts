import { Viewport } from "./viewport.class";

export interface CanvasObject {
    drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void;
    getOrder(): number;
    isVisible: boolean;
}