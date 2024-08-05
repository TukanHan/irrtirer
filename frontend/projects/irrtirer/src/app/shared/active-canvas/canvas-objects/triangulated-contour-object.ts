import { ColorHelper } from '../../../core/helpers/color-helper';
import { Color } from '../../../core/models/color.model';
import { Vector } from '../../../core/models/point.model';
import { CanvasObject } from '../models/canvas-object.interface';
import { Viewport } from '../models/viewport.class';

export class TriangulatedContourObject implements CanvasObject {
    vertices: Vector[];
    triangulationMesh: Vector[][];
    color: Color;
    order: number;

    borderThicnses: number = 6;
    innerThicnes: number = 3;

    constructor(vertices: Vector[], triangulationMesh: Vector[][], color: Color, order: number = 100) {
        this.vertices = vertices;
        this.color = color;
        this.order = order;
        this.triangulationMesh = triangulationMesh;
    }

    drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        if (this.vertices.length < 3) {
            return;
        }

        ctx.strokeStyle = ColorHelper.rgbToHex(this.color);

        this.drawTriangulationMesh(ctx, viewport);        
        this.drawBorder(ctx, viewport);
        ctx.lineWidth = 1;
    }

    drawBorder(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        ctx.lineWidth = this.borderThicnses;
        let point: Vector = viewport.getViewportPosition(this.vertices[0]);

        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        for (let i = 1; i < this.vertices.length; ++i) {
            point = viewport.getViewportPosition(this.vertices[i]);
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
        for(const triangle of this.triangulationMesh) {
            ctx.beginPath();
            let point: Vector = viewport.getViewportPosition(triangle[0]);
            ctx.moveTo(point.x, point.y);
            for (let j = 1; j < 3; ++j) {
                point = viewport.getViewportPosition(triangle[j]);
                ctx.lineTo(point.x, point.y);
            }
    
            ctx.closePath();
            ctx.stroke();
        }
        ctx.globalAlpha = 1;
    }

    selectLines(): void {
        //TODO
    }

    getOrder(): number {
        return this.order;
    }
}
