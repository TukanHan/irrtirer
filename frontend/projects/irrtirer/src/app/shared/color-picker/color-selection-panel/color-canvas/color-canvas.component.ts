import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    ViewChild,
} from '@angular/core';
import { Size } from '../../../../core/models/math/size.interface';
import { ColorHelper } from '../../../../core/helpers/color-helper';
import { ColorHsv } from '../../../../core/models/color.model';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

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
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorCanvasComponent implements AfterViewInit, OnChanges, OnDestroy {
    @Input()
    hValue: number;

    @Input()
    sValue: number;

    @Input()
    vValue: number;

    @Output()
    colorChange: EventEmitter<ColorHsv> = new EventEmitter<ColorHsv>();

    cursorData$: Subject<CursorDataModel> = new Subject();

    @ViewChild('canvas')
    canvas: ElementRef<HTMLCanvasElement>;

    private ctx: CanvasRenderingContext2D;

    private isDragging: boolean = false;

    private onMouseDown: (evt: MouseEvent) => void;

    private onMouseUp: (evt: MouseEvent) => void;

    private onMouseMove: (evt: MouseEvent) => void;

    constructor() {
        this.onMouseDown = (evt: MouseEvent) => {
            this.isDragging = true;
            document.body.style.cursor = 'pointer';
            this.onCanvasMouseInteraction(evt);
        };

        this.onMouseUp = () => {
            this.isDragging = false;
            document.body.style.cursor = '';
        };

        this.onMouseMove = (evt: MouseEvent) => {
            if (this.isDragging) {
                this.onCanvasMouseInteraction(evt);
            }
        };
    }

    private onCanvasMouseInteraction(evt: MouseEvent): void {
        const canvasRect: DOMRect = this.canvas.nativeElement.getBoundingClientRect();

        const horizontalRawValue = (evt.clientX - canvasRect.x) / canvasRect.width;
        const verticalRawValue = (evt.clientY - canvasRect.y) / canvasRect.height;

        this.sValue = Math.min(1, Math.max(0, horizontalRawValue));
        this.vValue = Math.min(1, Math.max(0, 1 - verticalRawValue));

        this.colorChange.next({ h: this.hValue, s: this.sValue, v: this.vValue });

        this.updateColorCanvas();
    }

    ngOnDestroy(): void {
        this.canvas.nativeElement.removeEventListener('mousedown', this.onMouseDown);
        window.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('mousemove', this.onMouseMove);
    }

    ngAfterViewInit(): void {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.updateColorCanvas();

        this.canvas.nativeElement.addEventListener('mousedown', this.onMouseDown);
        window.addEventListener('mouseup', this.onMouseUp);
        window.addEventListener('mousemove', this.onMouseMove);
    }

    ngOnChanges() {
        if (this.canvas) {
            this.updateColorCanvas();
        }
    }

    private updateColorCanvas(): void {
        this.drawColorCanvas();
        this.drawCursor();
    }

    private drawColorCanvas(): void {
        const pixelSize: Size = {
            height: this.canvas.nativeElement.height,
            width: this.canvas.nativeElement.width,
        };

        const whiteToColorGrad: CanvasGradient = this.ctx.createLinearGradient(0, 0, pixelSize.width, 0);
        whiteToColorGrad.addColorStop(0, '#FFFFFF');

        const hueHexColor: string = ColorHelper.hsvToHex({ h: this.hValue, s: 1, v: 1 });
        whiteToColorGrad.addColorStop(1, hueHexColor);

        const transparentToBlackGrad: CanvasGradient = this.ctx.createLinearGradient(0, 0, 0, pixelSize.height);
        transparentToBlackGrad.addColorStop(0, '#00000000');
        transparentToBlackGrad.addColorStop(1, '#000000');

        this.ctx.fillStyle = whiteToColorGrad;
        this.ctx.fillRect(0, 0, pixelSize.width, pixelSize.height);

        this.ctx.fillStyle = transparentToBlackGrad;
        this.ctx.fillRect(0, 0, pixelSize.width, pixelSize.height);
    }

    private drawCursor(): void {
        const canvasSize: DOMRect = this.canvas.nativeElement.getBoundingClientRect();
        const horizontalPosition: number = canvasSize.width * this.sValue - 8;
        const verticalPosition: number = canvasSize.height * (1 - this.vValue) - 8;

        this.cursorData$.next({
            horizontalOffset: `${horizontalPosition}px`,
            verticalOffset: `${verticalPosition}px`,
            color: ColorHelper.hsvToHex({ h: this.hValue, s: this.sValue, v: this.vValue }),
        });
    }
}
