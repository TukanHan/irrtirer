import { ColorHelper } from '../../../core/helpers/color-helper';
import { Color } from '../../../core/models/color.model';
import { Vector } from '../../../core/models/point.model';
import { CanvasObject } from '../models/canvas-object.interface';
import { Viewport } from '../models/viewport.class';

interface ViewportZoomGridColors {
    decimalGridColor: string;
    defaultGridColor: string;
}

export class GridObject implements CanvasObject {
    public zeroAxisGridColor: string = '#424242';
    public maxDecimalGridColor: string = '#363636';
    public maxDefaultGridColor: string = '#292931';
    public backgroundColor: string = '#191c1c';

    getOrder(): number {
        return -1;
    }

    drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport) {
        const start = viewport.startWorldPos;
        const end = viewport.endWorldPos;

        const gridLength: number = Math.pow(10, Math.ceil(Math.log(viewport.zoom) / Math.log(10))) / 10;
        const currentZoomGridColors: ViewportZoomGridColors = this.calculateGridColorsForZoom(gridLength, viewport.zoom);

        for (let i = Math.floor(start.y / gridLength) * gridLength; end.y > i; i += gridLength) {
            const horizontal = viewport.getViewportYPosition(i);
            const startX: Vector = new Vector(0, horizontal);
            const endX: Vector = new Vector(viewport.pxSize.width, horizontal);
            this.drawLine(ctx, startX, endX, this.calculateGridColor(i, gridLength, currentZoomGridColors));
        }

        for (let i = Math.floor(start.x / gridLength) * gridLength; end.x > i; i += gridLength) {
            const vertical = viewport.getViewportXPosition(i);
            const startY: Vector = new Vector(vertical, 0);
            const endY: Vector = new Vector(vertical, viewport.pxSize.height);
            this.drawLine(ctx, startY, endY, this.calculateGridColor(i, gridLength, currentZoomGridColors));
        }
    }

    calculateGridColor(coordinate: number, gridLength: number, colors: ViewportZoomGridColors): string {
        if (coordinate === 0) {
            return this.zeroAxisGridColor;
        }

        const decimalSeparatorTestValue = Math.round(coordinate / gridLength);
        if (decimalSeparatorTestValue % 10 === 0) {
            if (decimalSeparatorTestValue % 100 === 0) {
                return this.maxDecimalGridColor;
            }

            return colors.decimalGridColor
        }

        return colors.defaultGridColor;
    }

    drawLine(ctx: CanvasRenderingContext2D, start: Vector, end: Vector, color: string): void {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
    }

    calculateGridColorsForZoom(gridLength: number, zoom: number): ViewportZoomGridColors {
        const maxDecimalGridColor: Color = ColorHelper.hexToRgb(this.maxDecimalGridColor);
        const maxDefaultGridColor: Color = ColorHelper.hexToRgb(this.maxDefaultGridColor);
        const minDefaultGridColor: Color = ColorHelper.hexToRgb(this.backgroundColor);

        const interpolationValue = (zoom - gridLength) / (gridLength * 10 - gridLength);

        return {
            decimalGridColor: ColorHelper.rgbToHex(ColorHelper.lerp(maxDecimalGridColor, maxDefaultGridColor, interpolationValue)),
            defaultGridColor: ColorHelper.rgbToHex(ColorHelper.lerp(maxDefaultGridColor, minDefaultGridColor, interpolationValue)),
        };
    }
}
