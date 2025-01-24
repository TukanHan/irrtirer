import { ColorHelper } from '../../../core/helpers/color-helper';
import { TriangulationMeshHelper } from '../../../core/helpers/polygon/triangulation-mesh-helper';
import { Color } from '../../../core/models/color.model';
import { Line } from '../../../core/models/line.model';
import { Vector } from '../../../core/models/vector.model';
import { Triangle } from '../../mosaic-generator/models/triangle.model';
import { CanvasObject } from '../models/canvas-object.interface';
import { Viewport } from '../models/viewport.class';

export class TriangulatedContourObject implements CanvasObject {
    outerContour: Vector[];
    innerLines: Line[];

    color: Color;
    order: number;

    borderThicnses: number = 6;
    innerThicnes: number = 3;

    constructor(triangulationMesh: Triangle[], color: Color, order: number = 100) {
        this.color = color;
        this.order = order;

        this.selectLines(triangulationMesh);
    }

    drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        if (this.outerContour.length < 3) {
            return;
        }

        ctx.strokeStyle = ColorHelper.rgbToHex(this.color);

        this.drawTriangulationMesh(ctx, viewport);
        this.drawBorder(ctx, viewport);
        ctx.lineWidth = 1;
    }

    drawBorder(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        ctx.lineWidth = this.borderThicnses;
        let point: Vector = viewport.getViewportPosition(this.outerContour[0]);

        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        for (let i = 1; i < this.outerContour.length; ++i) {
            point = viewport.getViewportPosition(this.outerContour[i]);
            ctx.lineTo(point.x, point.y);
        }

        ctx.closePath();
        ctx.stroke();

        ctx.globalAlpha = 0.25;
        ctx.fillStyle = ColorHelper.rgbToHex(this.color);
        ctx.fill();
        ctx.globalAlpha = 1;
    }

    drawTriangulationMesh(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        ctx.lineWidth = this.innerThicnes;
        ctx.globalAlpha = 0.3;

        for (const line of this.innerLines) {
            ctx.beginPath();

            const startWorldPos: Vector = viewport.getViewportPosition(line.start);
            ctx.moveTo(startWorldPos.x, startWorldPos.y);
            const endWorldPos: Vector = viewport.getViewportPosition(line.end);
            ctx.lineTo(endWorldPos.x, endWorldPos.y);

            ctx.stroke();
        }

        ctx.globalAlpha = 1;
    }

    selectLines(triangulationMesh: Triangle[]): void {
        
        const lines: Map<number, { line: Line; count: number }> = TriangulationMeshHelper.collectMeshLines(triangulationMesh);

        const outerLines: Line[] = [];
        const innerLines: Line[] = [];

        for (const line of lines.values()) {
            if (line.count == 2) {
                innerLines.push(line.line);
            } else {
                outerLines.push(line.line);
            }
        }

        this.outerContour = this.reconstructContour(outerLines);
        this.innerLines = innerLines;
    }

    private reconstructContour(outerLines: Line[]): Vector[] {
        const contour: Vector[] = [];

        let currentLine: Line = outerLines[0];
        let currentPoint: Vector = currentLine.start;
        for (let i = 0; i < outerLines.length; ++i) {
            if (!contour.find(vertex => Vector.areEqual(vertex, currentPoint))) {
                contour.push(currentPoint);
            }

            currentLine = outerLines.find(
                (line) => currentLine !== line && (Vector.areEqual(currentPoint, line.start) || Vector.areEqual(currentPoint, line.end))
            );
            currentPoint = Vector.areEqual(currentLine.start, currentPoint) ? currentLine.end : currentLine.start;
        }

        return contour;
    }

    getOrder(): number {
        return this.order;
    }
}
