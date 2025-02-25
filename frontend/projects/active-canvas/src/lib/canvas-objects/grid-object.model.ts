import { CanvasObject } from './canvas-object.interface';
import { IVector } from '../models/math/vector.interface';
import { Vector } from '../models/math/vector.model';
import { Viewport } from '../models/canvas/viewport.model';
import { BaseCanvasObject } from './base-canvas-object.model';
import Color, { ColorInstance } from 'color';

interface ViewportZoomGridColors {
    decimalGridColor: string;
    defaultGridColor: string;
}

interface GridLine {
    start: IVector;
    end: IVector;
    priorityLevel: number;
}

export class GridObject extends BaseCanvasObject implements CanvasObject {
    public zeroAxisGridColor: string = '#424242';
    public maxDecimalGridColor: string = '#363636';
    public maxDefaultGridColor: string = '#292931';
    public backgroundColor: string = '#191c1c';

    public getOrder(): number {
        return -1;
    }

    public drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        const start = viewport.startWorldPos;
        const end = viewport.endWorldPos;

        const gridLength: number = Math.pow(10, Math.ceil(Math.log(viewport.zoom) / Math.log(10))) / 10;
        const currentZoomGridColors: ViewportZoomGridColors = this.calculateGridColorsForZoom(gridLength, viewport.zoom);
        const lines: GridLine[] = [];

        for (let i = Math.floor(start.y / gridLength) * gridLength; end.y > i; i += gridLength) {
            const horizontal = viewport.getViewportYPosition(i);
            const startX: IVector = new Vector(0, horizontal);
            const endX: IVector = new Vector(viewport.pxSize.width, horizontal);
            lines.push({ start: startX, end: endX, priorityLevel: this.getLinePriority(i, gridLength) });
        }

        for (let i = Math.floor(start.x / gridLength) * gridLength; end.x > i; i += gridLength) {
            const vertical = viewport.getViewportXPosition(i);
            const startY: IVector = new Vector(vertical, 0);
            const endY: IVector = new Vector(vertical, viewport.pxSize.height);
            lines.push({ start: startY, end: endY, priorityLevel: this.getLinePriority(i, gridLength) });
        }

        lines.sort((a,b) => b.priorityLevel - a.priorityLevel).forEach(line => {
            this.drawLine(ctx, line.start, line.end, this.getLineColorOnPriority(line.priorityLevel, currentZoomGridColors));
        });
    }

    private getLineColorOnPriority(priorityLevel: number, colors: ViewportZoomGridColors): string {
        switch(priorityLevel) {
            case 0:
                return this.zeroAxisGridColor;
            case 1:
                return this.maxDecimalGridColor;
            case 2:
                return colors.decimalGridColor;
            case 3:
            default:
                return colors.defaultGridColor;
        }
    }
    
    private getLinePriority(coordinate: number, gridLength: number): number {
        if(coordinate === 0) {
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

    private calculateGridColorsForZoom(gridLength: number, zoom: number): ViewportZoomGridColors {
        const maxDecimalGridColor: ColorInstance = Color(this.maxDecimalGridColor);
        const maxDefaultGridColor: ColorInstance = Color(this.maxDefaultGridColor);
        const minDefaultGridColor: ColorInstance = Color(this.backgroundColor);

        const interpolationValue = (zoom - gridLength) / (gridLength * 10 - gridLength);

        return {
            decimalGridColor: maxDecimalGridColor.mix(maxDefaultGridColor, interpolationValue).string(),
            defaultGridColor: maxDefaultGridColor.mix(minDefaultGridColor, interpolationValue).string(),
        };
    }
}
