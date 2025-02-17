import { CanvasObject } from '../models/canvas/canvas-object.interface';
import { IVector } from '../models/math/vector.interface';
import { Vector } from '../models/math/vector.model';
import { Viewport } from '../viewport/viewport.model';
import { BaseCanvasObject } from './base-canvas-object.model';
import Color, { ColorInstance } from 'color';

interface ViewportZoomGridColors {
    decimalGridColor: string;
    defaultGridColor: string;
}

export class GridObject extends BaseCanvasObject implements CanvasObject {
    public zeroAxisGridColor: string = '#424242';
    public maxDecimalGridColor: string = '#363636';
    public maxDefaultGridColor: string = '#292931';
    public backgroundColor: string = '#191c1c';

    public getOrder(): number {
        return -1;
    }

    public drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport) {
        const start = viewport.startWorldPos;
        const end = viewport.endWorldPos;

        const gridLength: number = Math.pow(10, Math.ceil(Math.log(viewport.zoom) / Math.log(10))) / 10;
        const currentZoomGridColors: ViewportZoomGridColors = this.calculateGridColorsForZoom(gridLength, viewport.zoom);

        for (let i = Math.floor(start.y / gridLength) * gridLength; end.y > i; i += gridLength) {
            const horizontal = viewport.getViewportYPosition(i);
            const startX: IVector = new Vector(0, horizontal);
            const endX: IVector = new Vector(viewport.pxSize.width, horizontal);
            this.drawLine(ctx, startX, endX, this.calculateGridColor(i, gridLength, currentZoomGridColors));
        }

        for (let i = Math.floor(start.x / gridLength) * gridLength; end.x > i; i += gridLength) {
            const vertical = viewport.getViewportXPosition(i);
            const startY: IVector = new Vector(vertical, 0);
            const endY: IVector = new Vector(vertical, viewport.pxSize.height);
            this.drawLine(ctx, startY, endY, this.calculateGridColor(i, gridLength, currentZoomGridColors));
        }
    }

    private calculateGridColor(coordinate: number, gridLength: number, colors: ViewportZoomGridColors): string {
        if (coordinate === 0) {
            return this.zeroAxisGridColor;
        }

        const decimalSeparatorTestValue = Math.round(coordinate / gridLength);
        if (decimalSeparatorTestValue % 10 === 0) {
            if (decimalSeparatorTestValue % 100 === 0) {
                return this.maxDecimalGridColor;
            }

            return colors.decimalGridColor;
        }

        return colors.defaultGridColor;
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
