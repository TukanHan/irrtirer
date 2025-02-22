import { Viewport } from '../models/canvas/viewport.model';
import { IActiveCanvas } from '../models/canvas/active-canvas.interface';

export interface CanvasObject {
    /**
     * Method for internal use only to rendering object.
     * @param ctx Canvas
     * @param viewport Current visible canvas frame
     */
    drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void;

    /**
     * Method for internal use to get object order on canvas
     */
    getOrder(): number;

    /**
     * Method for internal use to attach object to canvas
     */
    setParent(activeCanvas: IActiveCanvas): void;
    
    /**
     * Method for removing object from canvas
     */
    removeObject(): void;

    getVisibility(): boolean;

    setVisibility(visibility: boolean, redraw?: boolean): void;
}
