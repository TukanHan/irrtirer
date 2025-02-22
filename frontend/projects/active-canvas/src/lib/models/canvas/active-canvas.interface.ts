import { CanvasObject } from "../../canvas-objects/canvas-object.interface";

export interface IActiveCanvas {
    addCanvasObject(addedObject: CanvasObject): void;
    removeCanvasObject(removedObject: CanvasObject): void;
    redraw(): void;
}