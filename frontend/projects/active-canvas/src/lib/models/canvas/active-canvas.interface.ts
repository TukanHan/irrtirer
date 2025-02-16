import { CanvasObject } from "./canvas-object.interface";

export interface IActiveCanvas {
    addCanvasObject(addedObject: CanvasObject): void;
    removeCanvasObject(removedObject: CanvasObject): void;
}