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
import { CanvasObject } from './canvas-objects/canvas-object.interface';
import { Viewport } from './models/canvas/viewport.model';
import { Size } from './models/math/size.interface';
import { UnitConverter } from './utils/unit-converter';
import { Vector } from './models/math/vector.model';
import { IVector } from './models/math/vector.interface';
import { CanvasOptions } from './models/canvas/canvas-options.interface';
import { IActiveCanvas } from './models/canvas/active-canvas.interface';
import { GridObject } from './canvas-objects/grid-object.model';
import { DEFAULT_CANVAS_OPTIONS } from './constants/canvas-options.const';

@Component({
    selector: 'ac-active-canvas',
    templateUrl: 'active-canvas.component.html',
    styleUrl: 'active-canvas.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveCanvasComponent implements IActiveCanvas, AfterViewInit, OnDestroy {
    @Output()
    public clicked: EventEmitter<IVector> = new EventEmitter<IVector>();

    @Input()
    public set options(value: CanvasOptions) {
        this._options = Object.assign(DEFAULT_CANVAS_OPTIONS, value);
        this.configureCanvas();
    }

    public get viewport(): Viewport {
        return this._viewport;
    }

    @ViewChild('canvas')
    private canvas: ElementRef<HTMLCanvasElement>;

    private _options: CanvasOptions = DEFAULT_CANVAS_OPTIONS;

    private _viewport: Viewport;

    private isDragging = false;

    private ctx: CanvasRenderingContext2D;

    private gridObject: GridObject;

    private canvasObjects: CanvasObject[] = [];

    private handleMouseUp: () => void = this.onMouseUp.bind(this);

    private handleMouseMove: (event: MouseEvent) => void = this.onMouseMove.bind(this);

    private handleMouseDown: (event: MouseEvent) => void = this.onMouseDown.bind(this);

    private handleWheelMove: (event: WheelEvent) => void = this.onWheelMove.bind(this);

    private handleResize: () => void = this.onResize.bind(this);

    constructor(private cd: ChangeDetectorRef) {}

    public ngAfterViewInit(): void {
        this.ctx = this.canvas.nativeElement.getContext('2d');

        window.addEventListener('resize', this.handleResize, false);

        this.canvas.nativeElement.addEventListener('wheel', this.handleWheelMove);
        this.canvas.nativeElement.addEventListener('mousedown', this.handleMouseDown);
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);

        this.configureCanvas();

        this._viewport = new Viewport(Vector.zero, 1, { width: 0, height: 0 });
        setTimeout(() => this.onResize(), 1);
    }

    private configureCanvas(): void {
        this.configureGrid();
    }

    private configureGrid(): void {
        this.canvasObjects = this.canvasObjects.filter((object) => object !== this.gridObject);

        if (this._options.showGrid) {
            this.gridObject = new GridObject();
            if (this._options.canvasGridColor) {
                this.gridObject.gridBaseColor = this._options.canvasGridColor;
            }

            this.addCanvasObject(this.gridObject);
        }
    }

    public ngOnDestroy(): void {
        this.canvas.nativeElement.removeEventListener('wheel', this.handleWheelMove);
        this.canvas.nativeElement.removeEventListener('mousedown', this.handleMouseDown);
        window.removeEventListener('resize', this.handleResize, false);
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }

    private onWheelMove(event: WheelEvent): void {
        const cursorWorldPos: IVector = this._viewport.getWorldPosition(new Vector(event.offsetX, event.offsetY));
        const zoomDelta: number = this._viewport.zoom * (event.deltaY / 1000);
        const zoomMultiplier = Math.max(Math.min(this._viewport.zoom + zoomDelta, this._options.maxZoom), this._options.minZoom) / this._viewport.zoom;

        const newPosition: Vector = new Vector(
            cursorWorldPos.x - (cursorWorldPos.x - this._viewport.position.x) * zoomMultiplier,
            cursorWorldPos.y - (cursorWorldPos.y - this._viewport.position.y) * zoomMultiplier
        );

        this._viewport = new Viewport(newPosition, this._viewport.zoom * zoomMultiplier, this._viewport.pxSize);
        this.redraw();
        event.preventDefault();
    };

    private onMouseDown(event: MouseEvent): void {
        this.clicked.emit(this._viewport.getWorldPosition(new Vector(event.offsetX, event.offsetY)));
        if (this._options?.isMovable === false) {
            return;
        }

        document.body.style.cursor = 'grab';
        this.isDragging = true;
        this.cd.markForCheck();
    };

    private onMouseMove(event: MouseEvent): void {
        if (this._options?.isMovable === false) {
            return;
        }

        if (this.isDragging) {
            const newPosition: Vector = new Vector(
                this._viewport.position.x - UnitConverter.pxToCm(event.movementX) * this._viewport.zoom,
                this._viewport.position.y - UnitConverter.pxToCm(event.movementY) * this._viewport.zoom
            );

            this._viewport = new Viewport(newPosition, this._viewport.zoom, this._viewport.pxSize);
            this.redraw();
        }
    };

    private onMouseUp(): void {
        if (this._options?.isMovable === false) {
            return;
        }

        document.body.style.cursor = '';
        this.isDragging = false;
        this.cd.markForCheck();
    };

    private onResize(): void {
        const canvasRect: DOMRect = this.canvas.nativeElement.getBoundingClientRect();
        const newCanvasSize: Size = {
            height: canvasRect.height,
            width: canvasRect.width,
        };

        this.canvas.nativeElement.width = newCanvasSize.width;
        this.canvas.nativeElement.height = newCanvasSize.height;

        this._viewport = new Viewport(this._viewport.position, this._viewport.zoom, newCanvasSize);
        this.redraw();
    };

    public setViewport(zoom: number = null, position: IVector = null, redraw: boolean = false): void {
        this._viewport = new Viewport(
            position ?? this._viewport.position,
            zoom ?? this._viewport.zoom,
            this._viewport.pxSize
        );

        if (redraw) {
            this.redraw();
        }
    }

    public addCanvasObject(addedObject: CanvasObject, redraw: boolean = false): void {
        this.canvasObjects.push(addedObject);
        this.canvasObjects.sort((a, b) => a.getOrder() - b.getOrder());
        addedObject.setParent(this);

        if (redraw) {
            this.redraw();
        }
    }

    public removeObject(removedObject: CanvasObject): void {
        this.canvasObjects = this.canvasObjects.filter((canvasObj) => canvasObj !== removedObject);
        this.canvasObjects.sort((a, b) => a.getOrder() - b.getOrder());
    }

    public removeObjects(redraw: boolean = false): void {
        this.canvasObjects = this.canvasObjects.filter((object) => object === this.gridObject);
        if (redraw) {
            this.redraw();
        }
    }

    public redraw(): void {
        this.ctx.clearRect(0, 0, this._viewport.pxSize.width, this._viewport.pxSize.height);
        this.ctx.fillStyle = this._options.backgroundColor;
        this.ctx.fillRect(0, 0, this._viewport.pxSize.width, this._viewport.pxSize.height);

        for (const object of this.canvasObjects) {
            if (object.getVisibility()) {
                object.drawObject(this.ctx, this._viewport);
            }
        }

        this.cd.markForCheck();
    }
}
