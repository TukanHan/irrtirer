import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { Color } from '../../../core/models/color.model';
import { Size } from '../../../core/models/size.interface';

@Component({
    selector: 'app-color-selection-panel',
    standalone: true,
    imports: [MatSliderModule],
    templateUrl: './color-selection-panel.component.html',
    styleUrl: './color-selection-panel.component.scss',
})
export class ColorSelectionPanelComponent implements AfterViewInit {
    @Input()
    color: Color;

    @ViewChild('canvas')
    canvas: ElementRef<HTMLCanvasElement>;

    ngAfterViewInit(): void {
        const ctx = this.canvas.nativeElement.getContext('2d');

        const canvasRect: DOMRect = this.canvas.nativeElement.getBoundingClientRect();
        const pixelSize: Size = {
            height: canvasRect.height,
            width: canvasRect.width,
        };

        const whiteToColorGrad = ctx.createLinearGradient(0, 0, pixelSize.width, 0);
        whiteToColorGrad.addColorStop(0, '#FFFFFF');
        whiteToColorGrad.addColorStop(1, '#FF0000');

        const transparentToBlackGrad = ctx.createLinearGradient(0, 0, 0, 200);
        transparentToBlackGrad.addColorStop(0, '#00000000');
        transparentToBlackGrad.addColorStop(1, '#000000');

        ctx.fillStyle = whiteToColorGrad;
        ctx.fillRect(0, 0, pixelSize.width, pixelSize.height);

        ctx.fillStyle = transparentToBlackGrad;
        ctx.fillRect(0, 0, pixelSize.width, pixelSize.height);
    }
}
