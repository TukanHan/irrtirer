import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    output,
    signal,
    viewChild,
} from '@angular/core';
import { Size } from '../../../../core/models/math/size.interface';
import { CommonModule } from '@angular/common';
import Color from 'color';

export interface CursorDataModel {
    horizontalOffset: string;
    color: string;
}

@Component({
    selector: 'app-color-slider',
    imports: [CommonModule],
    templateUrl: './color-slider.component.html',
    styleUrl: './color-slider.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorSliderComponent implements AfterViewInit, OnDestroy, OnChanges {
    @Input()
    public value: number;

    public readonly valueChange = output<number>();

    protected readonly cursorDataSignal = signal<CursorDataModel | null>(null);

    protected readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

    private isDragging: boolean = false;

    private onMouseDown: (evt: MouseEvent) => void = (evt: MouseEvent) => {
        this.isDragging = true;
        document.body.style.cursor = 'pointer';
        this.onSliderMouseInteraction(evt);
    };

    private onMouseUp: (evt: MouseEvent) => void = () => {
        this.isDragging = false;
        document.body.style.cursor = '';
    };

    private onMouseMove: (evt: MouseEvent) => void = (evt: MouseEvent) => {
        if (this.isDragging) {
            this.onSliderMouseInteraction(evt);
        }
    };

    private onSliderMouseInteraction(evt: MouseEvent): void {
        const canvasRect: DOMRect = this.canvas().nativeElement.getBoundingClientRect();

        const rawValue = (evt.clientX - canvasRect.x) / canvasRect.width;
        this.value = Math.max(0, Math.min(1, rawValue));

        this.valueChange.emit(this.value);
        this.updateCursor(this.value);
    }

    public ngAfterViewInit(): void {
        this.drawSliderCanvas();
        this.updateCursor(this.value);

        this.canvas().nativeElement.addEventListener('mousedown', this.onMouseDown);
        window.addEventListener('mouseup', this.onMouseUp);
        window.addEventListener('mousemove', this.onMouseMove);
    }

    public ngOnDestroy(): void {
        this.canvas().nativeElement.removeEventListener('mousedown', this.onMouseDown);
        window.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('mousemove', this.onMouseMove);
    }

    public ngOnChanges(): void {
        if (this.canvas()) {
            this.updateCursor(this.value);
        }
    }

    private drawSliderCanvas(): void {
        const ctx: CanvasRenderingContext2D = this.canvas().nativeElement.getContext('2d')!;
        const pixelSize: Size = {
            height: this.canvas().nativeElement.height,
            width: this.canvas().nativeElement.width,
        };

        const gradient = ctx.createLinearGradient(0, 0, pixelSize.width, 0);

        const thresholdCount: number = 20;
        for (let i = 0; i <= thresholdCount; ++i) {
            const h = i * (1 / thresholdCount);
            gradient.addColorStop(h, Color({ h: h * 360, s: 100, v: 100 }).hex());
        }

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, pixelSize.width, pixelSize.height);
    }

    private updateCursor(value: number): void {
        const sliderWidth: number = this.canvas().nativeElement.getBoundingClientRect().width;
        const horizontalPosition: number = sliderWidth * value - 8;
        const hexCodeColor: string = Color({ h: value * 360, s: 100, v: 100 }).hex();

        this.cursorDataSignal.set({
            horizontalOffset: `${horizontalPosition}px`,
            color: hexCodeColor,
        });
    }
}
