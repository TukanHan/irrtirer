import { IActiveCanvas } from '../models/canvas/active-canvas.interface';
import { CanvasObject } from '../models/canvas/canvas-object.interface';
import { Viewport } from '../viewport/viewport.model';

export abstract class BaseCanvasObject implements CanvasObject {
    protected parent: IActiveCanvas;

    abstract drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void;

    abstract getOrder(): number;
    
    public setParent(activeCanvas: IActiveCanvas): void {
        this.parent = activeCanvas;
    }

    public removeObject(): void {
        this.parent.removeCanvasObject(this);
        this.parent = null;
    }

    isVisible: boolean = true;
}
