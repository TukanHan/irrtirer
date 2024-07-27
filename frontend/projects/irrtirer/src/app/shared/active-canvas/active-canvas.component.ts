import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
    ViewChild,
} from '@angular/core';
import { Size } from '../../core/models/size.interface';
import { Vector } from '../../core/models/point.model';
import { UnitConverter } from '../../core/helpers/unit-converter';
import { Viewport } from './models/viewport.class';
import { CanvasObject } from './models/canvas-object.interface';
import { CanvasOptions } from './models/canvas-options.interface';

const MIN_ZOOM: number = 0.00_000_000_1;
const MAX_ZOOM: number = 1_000_000_000;

@Component({
    selector: 'app-active-canvas',
    standalone: true,
    imports: [],
    templateUrl: './active-canvas.component.html',
    styleUrl: './active-canvas.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveCanvasComponent implements AfterViewInit, OnDestroy {
    @Output()
    canvasRedrawn: EventEmitter<void> = new EventEmitter();

    @Output()
    clicked: EventEmitter<Vector> = new EventEmitter<Vector>();

    @Input()
    options?: CanvasOptions;

    @ViewChild('canvas')
    canvas: ElementRef<HTMLCanvasElement>;

    viewport: Viewport;

    private isDraging = false;

    private ctx: CanvasRenderingContext2D;

    private canvasObjects: CanvasObject[] = [];

    constructor(private cd: ChangeDetectorRef) {}

    public ngAfterViewInit(): void {
        this.ctx = this.canvas.nativeElement.getContext('2d');

        window.addEventListener('resize', this.resizeFunc, false);

        this.canvas.nativeElement.addEventListener('wheel', this.onWheelMove);
        this.canvas.nativeElement.addEventListener('mousedown', this.onMouseDown); 
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mouseup', this.onMouseUp);

        this.viewport = new Viewport(Vector.zero, 1, { width: 0, height: 0 });
        setTimeout(() => this.resizeFunc(), 1);
    }

    public ngOnDestroy(): void {
        this.canvas.nativeElement.removeEventListener('wheel', this.onWheelMove);
        this.canvas.nativeElement.removeEventListener('mousedown', this.onMouseDown); 
        window.removeEventListener('resize', this.resizeFunc, false);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseup', this.onMouseUp);
    }

    private onWheelMove = (event: WheelEvent) => {
        const cursorWorldPos: Vector = this.viewport.getWorldPosition({ x: event.offsetX, y: event.offsetY });
        const zoomDelta: number = this.viewport.zoom * (event.deltaY / 1000);
        const zoomMultiplier = Math.max(Math.min(this.viewport.zoom + zoomDelta, MAX_ZOOM), MIN_ZOOM) / this.viewport.zoom;

        const newPosition: Vector = {
            x: cursorWorldPos.x - (cursorWorldPos.x - this.viewport.position.x) * zoomMultiplier,
            y: cursorWorldPos.y - (cursorWorldPos.y - this.viewport.position.y) * zoomMultiplier,
        };

        this.viewport = new Viewport(newPosition, this.viewport.zoom * zoomMultiplier, this.viewport.pxSize);
        this.rewrite();
        event.preventDefault();
    };

     private onMouseDown = (event: MouseEvent) => {
        this.clicked.emit(this.viewport.getWorldPosition({ x: event.offsetX, y: event.offsetY }));
        if (this.options?.isMovable === false) {
            return;
        }

        document.body.style.cursor = 'grab';
        this.isDraging = true;
        this.cd.markForCheck();
    };

    private onMouseMove = (evt: MouseEvent) => {
        if (this.options?.isMovable === false) {
            return;
        }

        if (this.isDraging) {
            const newPosition: Vector = {
                x: this.viewport.position.x - UnitConverter.pxToCm(evt.movementX) * this.viewport.zoom,
                y: this.viewport.position.y - UnitConverter.pxToCm(evt.movementY) * this.viewport.zoom,
            };

            this.viewport = new Viewport(newPosition, this.viewport.zoom, this.viewport.pxSize);
            this.rewrite();
        }
    };

    private onMouseUp = () => {
        if (this.options?.isMovable === false) {
            return;
        }

        document.body.style.cursor = '';
        this.isDraging = false;
        this.cd.markForCheck();
    }

    private resizeFunc = () => {
        const canvasRect: DOMRect = this.canvas.nativeElement.getBoundingClientRect();
        const newCanvasSize: Size = {
            height: canvasRect.height,
            width: canvasRect.width,
        };

        this.canvas.nativeElement.width = newCanvasSize.width;
        this.canvas.nativeElement.height = newCanvasSize.height;

        this.viewport = new Viewport(this.viewport.position, this.viewport.zoom, newCanvasSize);
        this.rewrite();
    };

    public setZoom(zoom: number): void {
        this.viewport = new Viewport(this.viewport.position, zoom, this.viewport.pxSize);
    }

    public addCanvasObject(addedObj: CanvasObject): void {
        this.canvasObjects.push(addedObj);
        this.canvasObjects.sort((a, b) => a.getOrder() - b.getOrder());
    }

    public removeCanvasObject(removedObj: CanvasObject): void {
        this.canvasObjects = this.canvasObjects.filter((canvasObj) => canvasObj !== removedObj);
        this.canvasObjects.sort((a, b) => a.getOrder() - b.getOrder());
    }

    public rewrite(): void {
        this.ctx.clearRect(0, 0, this.viewport.pxSize.width, this.viewport.pxSize.height);

        for (const object of this.canvasObjects) {
            object.drawObject(this.ctx, this.viewport);
        }

        this.cd.markForCheck();
        this.canvasRedrawn.next();
    }
}
