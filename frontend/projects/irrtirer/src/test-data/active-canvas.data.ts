import { EventEmitter } from '@angular/core';
import { vi } from 'vitest';
import { IActiveCanvas, IVector } from 'active-canvas';

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
