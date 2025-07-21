import { CanvasOptions } from '../models/canvas/canvas-options.interface';

export const DEFAULT_CANVAS_OPTIONS: CanvasOptions = {
    isMovable: true,
    showGrid: true,
    minZoom: 0.00_000_000_1,
    maxZoom: 1_000_000_000,
    backgroundColor: "transparent",
    canvasGridColor: '#3f3f3f',
};