import { EventEmitter } from '@angular/core';
import { vi } from 'vitest';
import { IActiveCanvas } from '../../../active-canvas/src/lib/models/canvas/active-canvas.interface';
import { IVector } from '../../../active-canvas/src/public-api';

export const activeCanvas: IActiveCanvas = {
    options: {
        update: vi.fn(),
    },
    viewport: vi.fn(() => ({
        cmSize: {
            width: 0,
            height: 0,
        },
    })),
    clicked: new EventEmitter<IVector>(),
    canvasLoaded: new EventEmitter<void>(),

    redraw: vi.fn(),
    addCanvasObject: vi.fn(),
    removeObjects: vi.fn(),
    setViewport: vi.fn(),
} as unknown as IActiveCanvas;
