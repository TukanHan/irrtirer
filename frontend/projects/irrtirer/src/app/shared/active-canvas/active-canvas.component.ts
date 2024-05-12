import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Size } from '../../core/models/size.interface';
import { Vector } from '../../core/models/point.model';
import { UnitConverter } from '../../core/helpers/unit-converter';
import { Viewport } from './models/viewport.class';
import { CanvasObject } from './models/canvas-object.interface';

@Component({
    selector: 'app-active-canvas',
    standalone: true,
    imports: [],
    templateUrl: './active-canvas.component.html',
    styleUrl: './active-canvas.component.scss',
})
export class ActiveCanvasComponent implements AfterViewInit, OnDestroy {
    @ViewChild('canvas')
    canvas: ElementRef<HTMLCanvasElement>;

    ctx: CanvasRenderingContext2D;

    viewport: Viewport;

    isDraging = false;

    elems: CanvasObject[] = [];

    ngAfterViewInit(): void {
        this.ctx = this.canvas.nativeElement.getContext('2d');

        window.addEventListener('resize', this.resizeFunc, false);

        this.canvas.nativeElement.addEventListener('wheel', (event: WheelEvent) => {
            const cursorWorldPos: Vector = this.viewport.getWorldPosition({ x: event.offsetX, y: event.offsetY });
            const zoomDelta: number = this.viewport.zoom * (event.deltaY / 1000);
            const zoomMultiplier = (this.viewport.zoom + zoomDelta) / this.viewport.zoom;

            const newPosition: Vector = {
                x: cursorWorldPos.x - (cursorWorldPos.x - this.viewport.position.x) * zoomMultiplier,
                y: cursorWorldPos.y - (cursorWorldPos.y - this.viewport.position.y) * zoomMultiplier,
            };

            this.viewport = new Viewport(newPosition, this.viewport.zoom * zoomMultiplier, this.viewport.pxSize);
            this.rewrite();
            event.preventDefault();
        });

        this.canvas.nativeElement.onmousedown = () => {
            this.isDraging = true;
        };

        this.canvas.nativeElement.onmouseup = () => {
            this.isDraging = false;
        };

        this.canvas.nativeElement.onmouseout = () => {
            this.isDraging = false;
        };

        this.canvas.nativeElement.addEventListener('mousemove', (evt: MouseEvent) => {
            if (this.isDraging) {
                const newPosition: Vector = {
                    x: this.viewport.position.x - UnitConverter.pxToCm(evt.movementX) * this.viewport.zoom,
                    y: this.viewport.position.y - UnitConverter.pxToCm(evt.movementY) * this.viewport.zoom,
                };

                this.viewport = new Viewport(newPosition, this.viewport.zoom, this.viewport.pxSize);
                this.rewrite();
            }
        });

        this.viewport = new Viewport(Vector.zero, 1, { width: 0, height: 0 });
        this.resizeFunc();
    }

    ngOnDestroy(): void {
        window.removeEventListener('resize', this.resizeFunc, false);
    }

    resizeFunc = () => {
        const canvasRect: DOMRect = this.canvas.nativeElement.getBoundingClientRect();
        const newCanvasSize: Size = {
            height: canvasRect.width / 2,
            width: canvasRect.width,
        };

        this.canvas.nativeElement.width = newCanvasSize.width;
        this.canvas.nativeElement.height = newCanvasSize.height;

        this.viewport = new Viewport(this.viewport.position, this.viewport.zoom, newCanvasSize);
        this.rewrite();
    };

    addCanvasObject(object: CanvasObject): void {
        this.elems.push(object);
        this.rewrite();
    }

    rewrite(): void {
        this.ctx.clearRect(0, 0, this.viewport.pxSize.width, this.viewport.pxSize.height);
        this.drawGrid();

        for (const object of this.elems) {
            object.drawObject(this.ctx, this.viewport);
        }
    }

    drawGrid(): void {
        const start = this.viewport.startWorldPos;
        const end = this.viewport.endWorldPos;
        const size: number = this.viewport.zoom <= 0.2 ? 1 : 10;

        for (let i = Math.floor(start.y / size) * size; end.y > i; i += size) {
            const horizontal = this.viewport.getViewportYPosition(i);
            const startX = { x: 0, y: horizontal };
            const endX = { x: this.viewport.pxSize.width, y: horizontal };
            this.drawLine(startX, endX, '#292929');
        }

        for (let i = Math.floor(start.x / size) * size; end.x > i; i += size) {
            const vertical = this.viewport.getViewportXPosition(i);
            const startY = { x: vertical, y: 0 };
            const endY = { x: vertical, y: this.viewport.pxSize.height };
            this.drawLine(startY, endY, '#292929');
        }
    }

    drawLine(start: Vector, end: Vector, color: string): void {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(start.x, start.y);
        this.ctx.lineTo(end.x, end.y);
        this.ctx.stroke();
    }
}
