import { IActiveCanvas } from '../../../active-canvas/src/lib/models/canvas/active-canvas.interface';

export const activeCanvas: IActiveCanvas = {
    redraw: jest.fn(),
    addCanvasObject: jest.fn(),
    clicked: {
        emit: jest.fn(),
    }
} as unknown as IActiveCanvas;