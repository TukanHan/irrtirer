import { EventEmitter } from '@angular/core';
import { IActiveCanvas } from '../../../active-canvas/src/lib/models/canvas/active-canvas.interface';
import { IVector } from '../../../active-canvas/src/public-api';
import { vi } from 'vitest';

export const activeCanvas: IActiveCanvas = {
    options: {
        update: vi.fn(),
    },
    clicked: new EventEmitter<IVector>(),

    redraw: vi.fn(),
    addCanvasObject: vi.fn(),
    removeObjects: vi.fn(),
} as unknown as IActiveCanvas;
