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
import { CanvasObject } from './models/canvas/canvas-object.interface';
import { Viewport } from './viewport/viewport.model';
import { Size } from './models/math/size.interface';
import { UnitConverter } from './utils/unit-converter';
import { Vector } from './models/math/vector.model';
import { IVector } from './models/math/vector.interface';
import { CanvasOptions, DEFAULT_CANVAS_OPTIONS } from './models/canvas/canvas-options.interface';
import { IActiveCanvas } from './models/canvas/active-canvas.interface';
import { GridObject } from './canvas-objects/grid-object';

const MIN_ZOOM: number = 0.00_000_000_1;
const MAX_ZOOM: number = 1_000_000_000;

@Component({
    selector: 'ac-active-canvas',
    templateUrl: 'active-canvas.component.html',
    styleUrl: 'active-canvas.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveCanvasComponent implements IActiveCanvas, AfterViewInit, OnDestroy {
    @Output()
    public canvasRedrawn: EventEmitter<void> = new EventEmitter();

    @Output()
    public clicked: EventEmitter<IVector> = new EventEmitter<IVector>();

    private _options: CanvasOptions = DEFAULT_CANVAS_OPTIONS;

    @Input()
    public set options(value: CanvasOptions) {
        this._options = Object.assign(DEFAULT_CANVAS_OPTIONS, value);
    }

    @ViewChild('canvas')
    private canvas: ElementRef<HTMLCanvasElement>;

    public viewport: Viewport;

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

        this.configureGrid();

        this.viewport = new Viewport(Vector.zero, 1, { width: 0, height: 0 });
        setTimeout(() => this.resizeFunc(), 1);
    }

    private configureGrid(): void {
        if(this._options.showGrid) {
            this.addCanvasObject(new GridObject());
        }
    }

    public ngOnDestroy(): void {
        this.canvas.nativeElement.removeEventListener('wheel', this.onWheelMove);
        this.canvas.nativeElement.removeEventListener('mousedown', this.onMouseDown);
        window.removeEventListener('resize', this.resizeFunc, false);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseup', this.onMouseUp);
    }

    private onWheelMove = (event: WheelEvent) => {
        const cursorWorldPos: IVector = this.viewport.getWorldPosition(new Vector(event.offsetX, event.offsetY));
        const zoomDelta: number = this.viewport.zoom * (event.deltaY / 1000);
        const zoomMultiplier = Math.max(Math.min(this.viewport.zoom + zoomDelta, MAX_ZOOM), MIN_ZOOM) / this.viewport.zoom;

        const newPosition: Vector = new Vector(
            cursorWorldPos.x - (cursorWorldPos.x - this.viewport.position.x) * zoomMultiplier,
            cursorWorldPos.y - (cursorWorldPos.y - this.viewport.position.y) * zoomMultiplier
        );

        this.viewport = new Viewport(newPosition, this.viewport.zoom * zoomMultiplier, this.viewport.pxSize);
        this.rewrite();
        event.preventDefault();
    };

    private onMouseDown = (event: MouseEvent) => {
        this.clicked.emit(this.viewport.getWorldPosition(new Vector(event.offsetX, event.offsetY)));
        if (this._options?.isMovable === false) {
            return;
        }

        document.body.style.cursor = 'grab';
        this.isDraging = true;
        this.cd.markForCheck();
    };

    private onMouseMove = (evt: MouseEvent) => {
        if (this._options?.isMovable === false) {
            return;
        }

        if (this.isDraging) {
            const newPosition: Vector = new Vector(
                this.viewport.position.x - UnitConverter.pxToCm(evt.movementX) * this.viewport.zoom,
                this.viewport.position.y - UnitConverter.pxToCm(evt.movementY) * this.viewport.zoom
            );

            this.viewport = new Viewport(newPosition, this.viewport.zoom, this.viewport.pxSize);
            this.rewrite();
        }
    };

    private onMouseUp = () => {
        if (this._options?.isMovable === false) {
            return;
        }

        document.body.style.cursor = '';
        this.isDraging = false;
        this.cd.markForCheck();
    };

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

    public addCanvasObject(addedObject: CanvasObject): void {
        this.canvasObjects.push(addedObject);
        this.canvasObjects.sort((a, b) => a.getOrder() - b.getOrder());
        addedObject.setParent(this);
    }

    public removeCanvasObject(removedObject: CanvasObject): void {
        this.canvasObjects = this.canvasObjects.filter((canvasObj) => canvasObj !== removedObject);
        this.canvasObjects.sort((a, b) => a.getOrder() - b.getOrder());
    }

    public rewrite(): void {
        this.ctx.clearRect(0, 0, this.viewport.pxSize.width, this.viewport.pxSize.height);

        for (const object of this.canvasObjects) {
            if (object.isVisible) {
                object.drawObject(this.ctx, this.viewport);
            }
        }

        this.cd.markForCheck();
        this.canvasRedrawn.next();
    }
}
