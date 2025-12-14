import { ModelSignal, OutputEmitterRef } from '@angular/core';
import { CanvasObject } from '../../canvas-objects/canvas-object.interface';
import { IVector } from '../math/vector.interface';
import { CanvasOptions } from './canvas-options.interface';
import { Viewport } from './viewport.model';
import { CanvasToImageOptions } from './canvas-to-image-options';

export interface IActiveCanvas {
    options: ModelSignal<CanvasOptions>;
    get viewport(): Viewport;

    clicked: OutputEmitterRef<IVector>;

    addCanvasObject(addedObject: CanvasObject, redraw?: boolean): void;
    removeObject(removedObject: CanvasObject): void;
    removeObjects(redraw?: boolean): void;
    setViewport(zoom?: number, position?: IVector, redraw?: boolean): void;
    redraw(): void;
    saveAsImage(options?: CanvasToImageOptions): Promise<Blob>;
}