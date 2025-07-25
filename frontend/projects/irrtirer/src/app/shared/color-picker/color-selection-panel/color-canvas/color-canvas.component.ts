import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnDestroy, output, signal, viewChild } from '@angular/core';
import { Size } from '../../../../core/models/math/size.interface';
import { CommonModule } from '@angular/common';
import Color, { ColorInstance } from 'color';

export interface CursorDataModel {
    horizontalOffset: string;
    verticalOffset: string;
    color: string;
}

@Component({
    selector: 'app-color-canvas',
    imports: [CommonModule],
    templateUrl: './color-canvas.component.html',
    styleUrl: './color-canvas.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorCanvasComponent implements AfterViewInit, OnChanges, OnDestroy {
    @Input()
    public hValue: number;

    @Input()
    public sValue: number;

    @Input()
    public vValue: number;

    public readonly colorChange = output<ColorInstance>();

    protected readonly cursorDataSignal = signal<CursorDataModel | null>(null);

    protected readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

    private isDragging: boolean = false;

    private onMouseDown: (evt: MouseEvent) => void = (evt: MouseEvent) => {
        this.isDragging = true;
        document.body.style.cursor = 'pointer';
        this.onCanvasMouseInteraction(evt);
    };

    private onMouseUp: (evt: MouseEvent) => void = () => {
        this.isDragging = false;
        document.body.style.cursor = '';
    };

    private onMouseMove: (evt: MouseEvent) => void = (evt: MouseEvent) => {
        if (this.isDragging) {
            this.onCanvasMouseInteraction(evt);
        }
    };

    private onCanvasMouseInteraction(evt: MouseEvent): void {
        const canvasRect: DOMRect = this.canvas().nativeElement.getBoundingClientRect();

        const horizontalRawValue = (evt.clientX - canvasRect.x) / canvasRect.width;
        const verticalRawValue = (evt.clientY - canvasRect.y) / canvasRect.height;

        this.sValue = Math.min(1, Math.max(0, horizontalRawValue));
        this.vValue = Math.min(1, Math.max(0, 1 - verticalRawValue));

        this.colorChange.emit(Color({ h: this.hValue * 360, s: this.sValue * 100, v: this.vValue * 100 }));

        this.updateColorCanvas();
    }

    public ngOnDestroy(): void {
        this.canvas().nativeElement.removeEventListener('mousedown', this.onMouseDown);
        window.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('mousemove', this.onMouseMove);
    }

    public ngAfterViewInit(): void {
        this.updateColorCanvas();

        this.canvas().nativeElement.addEventListener('mousedown', this.onMouseDown);
        window.addEventListener('mouseup', this.onMouseUp);
        window.addEventListener('mousemove', this.onMouseMove);
    }

    public ngOnChanges(): void {
        if (this.canvas()) {
            this.updateColorCanvas();
        }
    }

    private updateColorCanvas(): void {
        this.drawColorCanvas();
        this.drawCursor();
    }

    private drawColorCanvas(): void {
        const pixelSize: Size = {
            height: this.canvas().nativeElement.height,
            width: this.canvas().nativeElement.width,
        };

        const ctx: CanvasRenderingContext2D = this.canvas().nativeElement.getContext('2d')!;

        const whiteToColorGrad: CanvasGradient = ctx.createLinearGradient(0, 0, pixelSize.width, 0);
        whiteToColorGrad.addColorStop(0, '#FFFFFF');

        const hueHexColor: string = Color({ h: this.hValue * 360, s: 100, v: 100 }).hex();
        whiteToColorGrad.addColorStop(1, hueHexColor);

        const transparentToBlackGrad: CanvasGradient = ctx.createLinearGradient(0, 0, 0, pixelSize.height);
        transparentToBlackGrad.addColorStop(0, '#00000000');
        transparentToBlackGrad.addColorStop(1, '#000000');

        ctx.fillStyle = whiteToColorGrad;
        ctx.fillRect(0, 0, pixelSize.width, pixelSize.height);

        ctx.fillStyle = transparentToBlackGrad;
        ctx.fillRect(0, 0, pixelSize.width, pixelSize.height);
    }

    private drawCursor(): void {
        const canvasSize: DOMRect = this.canvas().nativeElement.getBoundingClientRect();
        const horizontalPosition: number = canvasSize.width * this.sValue - 8;
        const verticalPosition: number = canvasSize.height * (1 - this.vValue) - 8;

        this.cursorDataSignal.set({
            horizontalOffset: `${horizontalPosition}px`,
            verticalOffset: `${verticalPosition}px`,
            color: Color({ h: this.hValue * 360, s: this.sValue * 100, v: this.vValue * 100 }).hex(),
        });
    }
}
