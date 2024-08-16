import { ColorHelper } from '../../../core/helpers/color-helper';
import { Color } from '../../../core/models/color.model';
import { Line } from '../../../core/models/line.model';
import { Vector } from '../../../core/models/point.model';
import { CanvasObject } from '../models/canvas-object.interface';
import { Viewport } from '../models/viewport.class';

export class TriangulatedContourObject implements CanvasObject {
    outerContour: Vector[];
    innerLines: Line[];

    color: Color;
    order: number;

    borderThicnses: number = 6;
    innerThicnes: number = 3;

    constructor(triangulationMesh: Vector[][], color: Color, order: number = 100) {
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

    selectLines(triangulationMesh: Vector[][]): void {
        const lines: Map<number, { line: Line; count: number }> = this.collectMeshLines(triangulationMesh);

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

    private collectMeshLines(triangulationMesh: Vector[][]): Map<number, { line: Line; count: number }> {
        const lines: Map<number, { line: Line; count: number }> = new Map();

        for (const triangle of triangulationMesh) {
            let previousVertex: Vector = triangle.at(-1);
            for (let i = 0; i < 3; ++i) {
                const currentVertex = triangle[i];
                const vertices =
                    previousVertex.hash() < currentVertex.hash()
                        ? [previousVertex, currentVertex]
                        : [currentVertex, previousVertex];

                const line = new Line(vertices[0], vertices[1]);
                const lineHash: number = line.hash();

                const dictionaryValue = lines.get(lineHash);
                if (dictionaryValue) {
                    dictionaryValue.count++;
                } else {
                    lines.set(lineHash, { line, count: 1 });
                }

                previousVertex = currentVertex;
            }
        }

        return lines;
    }

    private reconstructContour(outerLines: Line[]): Vector[] {
        const contour: Vector[] = [];

        let currentLine: Line = outerLines[0];
        let currentPoint: Vector = currentLine.start;
        for (let i = 0; i < outerLines.length; ++i) {
            if (!contour.find(vertex => vertex.equal(currentPoint))) {
                contour.push(currentPoint);
            }

            currentLine = outerLines.find(
                (line) => currentLine !== line && (currentPoint.equal(line.start) || currentPoint.equal(line.end))
            );
            currentPoint = currentLine.start.equal(currentPoint) ? currentLine.end : currentLine.start;
        }

        return contour;
    }

    getOrder(): number {
        return this.order;
    }
}
