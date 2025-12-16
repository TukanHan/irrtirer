import { CanvasObject } from './canvas-object.interface';
import { IVector } from '../models/math/vector.interface';
import { Vector } from '../models/math/vector.model';
import { Viewport } from '../models/canvas/viewport.model';
import { BaseCanvasObject } from './base-canvas-object.model';
import Color, { ColorInstance } from 'color';

interface GridLine {
    start: IVector;
    end: IVector;
    depthLevel: number;
}

export class GridObject extends BaseCanvasObject implements CanvasObject {
    public gridBaseColor: string = '#424242';

    public getOrder(): number {
        return -1;
    }

    public drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        const start = viewport.startWorldPos;
        const end = viewport.endWorldPos;

        const gridLength: number = Math.pow(10, Math.ceil(Math.log(viewport.zoom) / Math.log(10))) / 10;
        const currentZoomGridColors: string[] = this.calculateGridColorsForZoom(gridLength, viewport.zoom);
        const lines: GridLine[] = [];

        for (let i = Math.floor(start.y / gridLength) * gridLength; end.y > i; i += gridLength) {
            const horizontal = viewport.getViewportYPosition(i);
            const startX: IVector = new Vector(0, horizontal);
            const endX: IVector = new Vector(viewport.pxSize.width, horizontal);
            lines.push({ start: startX, end: endX, depthLevel: GridObject.getLineDepthLevel(i, gridLength) });
        }

        for (let i = Math.floor(start.x / gridLength) * gridLength; end.x > i; i += gridLength) {
            const vertical = viewport.getViewportXPosition(i);
            const startY: IVector = new Vector(vertical, 0);
            const endY: IVector = new Vector(vertical, viewport.pxSize.height);
            lines.push({ start: startY, end: endY, depthLevel: GridObject.getLineDepthLevel(i, gridLength) });
        }

        ctx.lineWidth = viewport.scaleFactor;
        
        lines
            .sort((a, b) => b.depthLevel - a.depthLevel)
            .forEach((line) => {
                this.drawLine(ctx, line.start, line.end, GridObject.getLineColorForDepth(line.depthLevel, currentZoomGridColors));
            });
        
        ctx.lineWidth = 1;
    }

    private static getLineColorForDepth(depthLevel: number, colors: string[]): string {
        return colors[Math.min(depthLevel, colors.length - 1)];
    }

    private static getLineDepthLevel(coordinate: number, gridLength: number): number {
        if (coordinate === 0) {
            return 0;
        }

        const decimalSeparatorTestValue = Math.round(coordinate / gridLength);
        if (decimalSeparatorTestValue % 100 === 0) {
            return 1;
        } else if (decimalSeparatorTestValue % 10 === 0) {
            return 2;
        } else {
            return 3;
        }
    }

    private drawLine(ctx: CanvasRenderingContext2D, start: IVector, end: IVector, color: string): void {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
    }

    private calculateGridColorsForZoom(gridLength: number, zoom: number): string[] {
        const interpolationValue = (zoom - gridLength) / (gridLength * 10 - gridLength);
        const baseColor: ColorInstance = Color(this.gridBaseColor);

        return [
            this.gridBaseColor,
            baseColor.alpha(GridObject.linearInterpolation(0.66, 0.8, 1 - interpolationValue)).string(),
            baseColor.alpha(GridObject.linearInterpolation(0.33, 0.66, 1 - interpolationValue)).string(),
            baseColor.alpha(GridObject.linearInterpolation(0, 0.33, 1 - interpolationValue)).string(),
        ];
    }

    private static linearInterpolation(min: number, max: number, value: number): number {
        return min + (max - min) * value;
    }
}
