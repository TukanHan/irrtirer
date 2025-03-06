import { EventEmitter } from '@angular/core';
import { CanvasObject } from '../../canvas-objects/canvas-object.interface';
import { IVector } from '../math/vector.interface';
import { CanvasOptions } from './canvas-options.interface';
import { Viewport } from './viewport.model';

export interface IActiveCanvas {
    set options(value: CanvasOptions);
    get viewport(): Viewport;

    clicked: EventEmitter<IVector>;

    addCanvasObject(addedObject: CanvasObject, redraw?: boolean): void;
    removeObject(removedObject: CanvasObject): void;
    removeObjects(redraw?: boolean): void;
    setViewport(zoom?: number, position?: IVector, redraw?: boolean): void;
    redraw(): void;
}