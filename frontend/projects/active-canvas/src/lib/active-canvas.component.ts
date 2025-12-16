import {
    afterRenderEffect,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    computed,
    ElementRef,
    inject,
    model,
    OnDestroy,
    OnInit,
    output,
    viewChild,
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
import { CanvasRenderingContext } from './models/canvas/canvas-rendering-context';
import { CanvasToImageOptions } from './models/canvas/canvas-to-image-options';

@Component({
    selector: 'ac-active-canvas',
    templateUrl: 'active-canvas.component.html',
    styleUrl: 'active-canvas.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveCanvasComponent implements IActiveCanvas, OnInit, OnDestroy {
    public readonly clicked = output<IVector>();

    public readonly options = model<CanvasOptions>();

    public get viewport(): Viewport {
        return this._viewport;
    }

    private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

    private readonly currentOptions = computed<CanvasOptions>(() => ({
        ...DEFAULT_CANVAS_OPTIONS,
        ...this.options(),
    }));

    private _viewport: Viewport = new Viewport(Vector.zero, 1, { width: 0, height: 0 });

    private isDragging = false;

    private readonly ctx = computed<CanvasRenderingContext2D>(() => this.canvas().nativeElement.getContext('2d')!);

    private gridObject?: GridObject;

    private canvasObjects: CanvasObject[] = [];

    private readonly handleMouseUp: () => void = this.onMouseUp.bind(this);

    private readonly handleMouseMove: (event: MouseEvent) => void = this.onMouseMove.bind(this);

    private readonly handleMouseDown: (event: MouseEvent) => void = this.onMouseDown.bind(this);

    private readonly handleWheelMove: (event: WheelEvent) => void = this.onWheelMove.bind(this);

    private readonly resizeObserver = new ResizeObserver(() => this.onResize());

    private readonly cd = inject(ChangeDetectorRef);

    protected readonly configChangeEffect = afterRenderEffect(() => {
        this.configureCanvas();
        this.redraw();
    });

    public ngOnInit(): void {
        this.canvas().nativeElement.addEventListener('wheel', this.handleWheelMove);
        this.canvas().nativeElement.addEventListener('mousedown', this.handleMouseDown);
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
        this.resizeObserver.observe(this.canvas().nativeElement);
    }

    private configureCanvas(): void {
        this.configureGrid();
    }

    private configureGrid(): void {
        this.canvasObjects = this.canvasObjects.filter((object) => object !== this.gridObject);
        const options = this.currentOptions();

        if (options.showGrid) {
            this.gridObject = new GridObject();
            if (options.canvasGridColor) {
                this.gridObject.gridBaseColor = options.canvasGridColor;
            }

            this.addCanvasObject(this.gridObject);
        }
    }

    public ngOnDestroy(): void {
        this.canvas().nativeElement.removeEventListener('wheel', this.handleWheelMove);
        this.canvas().nativeElement.removeEventListener('mousedown', this.handleMouseDown);
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
        this.resizeObserver.unobserve(this.canvas().nativeElement);
    }

    private onWheelMove(event: WheelEvent): void {
        const cursorWorldPos: IVector = this._viewport.getWorldPosition(new Vector(event.offsetX, event.offsetY));
        const zoomDelta: number = this._viewport.zoom * (event.deltaY / 1000);
        const zoomMultiplier = Math.max(Math.min(this._viewport.zoom + zoomDelta, this.currentOptions().maxZoom), this.currentOptions().minZoom) / this._viewport.zoom;

        const newPosition: Vector = new Vector(
            cursorWorldPos.x - (cursorWorldPos.x - this._viewport.position.x) * zoomMultiplier,
            cursorWorldPos.y - (cursorWorldPos.y - this._viewport.position.y) * zoomMultiplier
        );

        this._viewport = new Viewport(newPosition, this._viewport.zoom * zoomMultiplier, this._viewport.pxSize);
        this.redraw();
        event.preventDefault();
    }

    private onMouseDown(event: MouseEvent): void {
        this.clicked.emit(this._viewport.getWorldPosition(new Vector(event.offsetX, event.offsetY)));
        if (this.currentOptions().isMovable === false) {
            return;
        }

        document.body.style.cursor = 'grab';
        this.isDragging = true;
        this.cd.markForCheck();
    }

    private onMouseMove(event: MouseEvent): void {
        if (this.currentOptions().isMovable === false) {
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
    }

    private onMouseUp(): void {
        if (this.currentOptions().isMovable === false) {
            return;
        }

        document.body.style.cursor = '';
        this.isDragging = false;
        this.cd.markForCheck();
    }

    private onResize(): void {
        const canvasRect: DOMRect = this.canvas().nativeElement.getBoundingClientRect();
        const newCanvasSize: Size = {
            height: canvasRect.height,
            width: canvasRect.width,
        };

        this.canvas().nativeElement.width = newCanvasSize.width;
        this.canvas().nativeElement.height = newCanvasSize.height;

        this._viewport = new Viewport(this._viewport.position, this._viewport.zoom, newCanvasSize);
        this.redraw();
    }

    public setViewport(zoom: number | null = null, position: IVector | null = null, redraw: boolean = false): void {
        this._viewport = new Viewport(position ?? this._viewport.position, zoom ?? this._viewport.zoom, this._viewport.pxSize);

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
        const canvasContext = this.ctx();
        ActiveCanvasComponent.drawBackground(canvasContext, this.viewport.pxSize, this.currentOptions().backgroundColor);
        ActiveCanvasComponent.drawObjects(canvasContext, this.canvasObjects, this.viewport);

        this.cd.markForCheck();
    }

    public saveAsImage(options?: CanvasToImageOptions): Promise<Blob> {
        const scaleFactor = options?.scaleFactor ?? 1.0;
        const pxSize = {
            width: this.viewport.pxSize.width * scaleFactor,
            height: this.viewport.pxSize.height * scaleFactor
        };

        const snapshotViewport = new Viewport(this._viewport.position, this._viewport.zoom / scaleFactor, pxSize, scaleFactor);

        const offscreenCanvas = new OffscreenCanvas(pxSize.width, pxSize.height);
        const canvasContext = offscreenCanvas.getContext('2d');

        const backgroundColor = options?.backgroundColor ?? this.currentOptions().backgroundColor;
        ActiveCanvasComponent.drawBackground(canvasContext, pxSize, backgroundColor);
        ActiveCanvasComponent.drawObjects(canvasContext, this.canvasObjects, snapshotViewport);

        return offscreenCanvas.convertToBlob({ type: 'image/png' });
    }

    private static drawBackground(canvasContext: CanvasRenderingContext, pxSize: Size, backgroundColor?: string): void {
        canvasContext.clearRect(0, 0, pxSize.width, pxSize.height);
        canvasContext.fillStyle = backgroundColor;
        canvasContext.fillRect(0, 0, pxSize.width, pxSize.height);
    }

    private static drawObjects(canvasContext: CanvasRenderingContext, canvasObjects: CanvasObject[], viewport: Viewport): void {
        for (const object of canvasObjects) {
            if (object.getVisibility()) {
                object.drawObject(canvasContext, viewport);
            }
        }
    }
}
