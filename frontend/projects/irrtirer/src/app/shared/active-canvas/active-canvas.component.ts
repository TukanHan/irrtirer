import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
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

    @HostBinding('class.dragged')
    isDraging = false;

    ctx: CanvasRenderingContext2D;

    viewport: Viewport;

    elems: CanvasObject[] = [];

    constructor(private cd: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this.ctx = this.canvas.nativeElement.getContext('2d');

        window.addEventListener('resize', this.resizeFunc, false);

        this.canvas.nativeElement.addEventListener('wheel', (event: WheelEvent) => {
            if (this.options?.isMovable === false) {
                return;
            }

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
        });

        this.canvas.nativeElement.onmousedown = (event: MouseEvent) => {
            if (this.options?.isMovable === false) {
                this.clicked.emit(this.viewport.getWorldPosition({ x: event.offsetX, y: event.offsetY }));
                return;
            }

            this.isDraging = true;
            this.cd.markForCheck();
        };

        this.canvas.nativeElement.onmouseup = () => {
            if (this.options?.isMovable === false) {
                return;
            }

            this.isDraging = false;
            this.cd.markForCheck();
        };

        this.canvas.nativeElement.addEventListener('mouseout', () => {
            if (this.options?.isMovable === false) {
                return;
            }

            this.isDraging = false;
            this.cd.markForCheck();
        });

        this.canvas.nativeElement.addEventListener('mousemove', (evt: MouseEvent) => {
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
        });

        this.viewport = new Viewport(Vector.zero, 1, { width: 0, height: 0 });
        setTimeout(() => this.resizeFunc(), 1);
    }

    ngOnDestroy(): void {
        window.removeEventListener('resize', this.resizeFunc, false);
    }

    resizeFunc = () => {
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

    addCanvasObject(object: CanvasObject): void {
        this.elems.push(object);
        this.elems.sort((a, b) => a.getOrder() - b.getOrder());
        this.rewrite();
    }

    rewrite(): void {
        this.ctx.clearRect(0, 0, this.viewport.pxSize.width, this.viewport.pxSize.height);

        for (const object of this.elems) {
            object.drawObject(this.ctx, this.viewport);
        }

        this.cd.markForCheck();
        this.canvasRedrawn.next();
    }
}