import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    computed,
    DestroyRef,
    ElementRef,
    inject,
    model,
    output,
    viewChild,
} from '@angular/core';
import { Size } from '../../../../core/models/math/size.interface';
import Color from 'color';

export interface CursorDataModel {
    horizontalOffset: string;
    color: string;
}

@Component({
    selector: 'app-color-slider',
    templateUrl: './color-slider.component.html',
    styleUrl: './color-slider.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorSliderComponent implements AfterViewInit {
    public readonly value = model<number>();

    public readonly valueChange = output<number>();

    protected readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

    protected readonly cursorData = computed<CursorDataModel>(() => {
        const value = this.value();
        const sliderWidth: number = this.canvas()?.nativeElement.getBoundingClientRect().width ?? 1;
        return this.computeCursorData(value, sliderWidth);
    });

    private readonly destroyRef = inject(DestroyRef);

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
        this.value.set(Math.max(0, Math.min(1, rawValue)));
        this.valueChange.emit(this.value());
    }

    public ngAfterViewInit(): void {
        this.drawSliderCanvas();

        this.canvas().nativeElement.addEventListener('mousedown', this.onMouseDown);
        window.addEventListener('mouseup', this.onMouseUp);
        window.addEventListener('mousemove', this.onMouseMove);
        
        this.destroyRef.onDestroy(() => {
            this.canvas().nativeElement.removeEventListener('mousedown', this.onMouseDown);
            window.removeEventListener('mouseup', this.onMouseUp);
            window.removeEventListener('mousemove', this.onMouseMove);
        });
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

    private computeCursorData(value: number, sliderWidth: number): CursorDataModel {
        const horizontalPosition: number = sliderWidth * value - 8;
        const hexCodeColor: string = Color({ h: value * 360, s: 100, v: 100 }).hex();

        return {
            horizontalOffset: `${horizontalPosition}px`,
            color: hexCodeColor,
        };
    }
}
