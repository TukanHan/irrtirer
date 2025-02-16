import { BaseCanvasObject, CanvasObject, IVector, Viewport } from "../../../../../active-canvas/src/public-api";
import { ColorHelper } from "../../core/helpers/color-helper";
import { Color } from "../../core/models/color.model";
import { Line } from "../../core/models/math/line.model";
import { Triangle } from "../../core/models/math/triangle.model";
import { Vector } from "../../core/models/math/vector.model";


export class TriangulatedContourObject extends BaseCanvasObject implements CanvasObject {
    private outerContour: Vector[];
    private innerLines: Line[];

    private color: Color;
    private order: number;

    private borderThicnses: number = 6;
    private innerThicnes: number = 3;

    constructor(mesh: Triangle[], contour: Vector[], color: Color, order: number = 100) {
        super();
        this.color = color;
        this.order = order;

        this.outerContour = contour;
        this.selectLines(mesh);
    }

    public drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        if (this.outerContour.length < 3) {
            return;
        }

        ctx.strokeStyle = ColorHelper.rgbToHex(this.color);

        this.drawTriangulationMesh(ctx, viewport);
        this.drawBorder(ctx, viewport);
        ctx.lineWidth = 1;
    }

    private drawBorder(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        ctx.lineWidth = this.borderThicnses;
        let point: IVector = viewport.getViewportPosition(this.outerContour[0]);

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

    private drawTriangulationMesh(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        ctx.lineWidth = this.innerThicnes;
        ctx.globalAlpha = 0.3;

        for (const line of this.innerLines) {
            ctx.beginPath();

            const startWorldPos: IVector = viewport.getViewportPosition(line.start);
            ctx.moveTo(startWorldPos.x, startWorldPos.y);
            const endWorldPos: IVector = viewport.getViewportPosition(line.end);
            ctx.lineTo(endWorldPos.x, endWorldPos.y);

            ctx.stroke();
        }

        ctx.globalAlpha = 1;
    }

    private selectLines(mesh: Triangle[]): void {
        const lines: Map<number, { line: Line; count: number }> = TriangulatedContourObject.collectMeshLines(mesh);

        const innerLines: Line[] = [];

        for (const line of lines.values()) {
            if (line.count == 2) {
                innerLines.push(line.line);
            }
        }

        this.innerLines = innerLines;
    }

    public getOrder(): number {
        return this.order;
    }

    private static collectMeshLines(triangulationMesh: Triangle[]): Map<number, { line: Line; count: number }> {
        const lines: Map<number, { line: Line; count: number }> = new Map();

        for (const triangle of triangulationMesh) {
            const triangleVertices = triangle.getVertices();
            let previousVertex: Vector = triangleVertices.at(-1);
            for (let i = 0; i < 3; ++i) {
                const currentVertex = triangleVertices[i];
                const vertices =
                    previousVertex.getHash() < currentVertex.getHash() ? [previousVertex, currentVertex] : [currentVertex, previousVertex];

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
}
