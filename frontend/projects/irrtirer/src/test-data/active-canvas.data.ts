import { EventEmitter } from '@angular/core';
import { IActiveCanvas } from '../../../active-canvas/src/lib/models/canvas/active-canvas.interface';
import { IVector } from '../../../active-canvas/src/public-api';

export const activeCanvas: IActiveCanvas = {
    options: {
        update: jest.fn(),
    },
    clicked: new EventEmitter<IVector>(),

    redraw: jest.fn(),
    addCanvasObject: jest.fn(),
    removeObjects: jest.fn(),
} as unknown as IActiveCanvas;
