import { IActiveCanvas } from '../models/canvas/active-canvas.interface';
import { CanvasObject } from './canvas-object.interface';
import { Viewport } from '../models/canvas/viewport.model';

export abstract class BaseCanvasObject implements CanvasObject {
    public parentCanvas: IActiveCanvas | null = null;

    protected isVisible: boolean = true;

    public abstract drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void;

    public abstract getOrder(): number;

    public setParent(activeCanvas: IActiveCanvas): void {
        this.parentCanvas = activeCanvas;
    }

    public removeObject(): void {
        this.parentCanvas?.removeObject(this);
        this.parentCanvas = null;
    }

    public getVisibility(): boolean {
        return this.isVisible;
    }

    public setVisibility(visibility: boolean, redraw: boolean = false): void {
        this.isVisible = visibility;
        if (redraw) {
            this.parentCanvas?.redraw();
        }
    }
}
