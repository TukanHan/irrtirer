import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Color, ColorHsv } from '../../../core/models/color.model';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColorHelper } from '../../../core/helpers/color-helper';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { ColorCanvasComponent } from './color-canvas/color-canvas.component';

const HexColorRegex: RegExp = /^#([0-9a-f]{3}){1,2}$/i;

@Component({
    selector: 'app-color-selection-panel',
    standalone: true,
    imports: [
        MatInputModule,
        FormsModule,
        CommonModule,
        ColorSliderComponent,
        ColorCanvasComponent,
    ],
    templateUrl: './color-selection-panel.component.html',
    styleUrl: './color-selection-panel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorSelectionPanelComponent implements AfterViewInit, OnDestroy {
    @Input()
    set color(value: Color) {
        const hsvColor = ColorHelper.rgbToHsv(value);
        this.hValue = hsvColor.h;
        this.sValue = hsvColor.s;
        this.vValue = hsvColor.v;
    }

    @Output()
    colorChange: EventEmitter<Color> = new EventEmitter<Color>();

    hexColor: string = 'blue';

    hValue: number = 0;
    sValue: number = 0;
    vValue: number = 0;

    ngAfterViewInit(): void {
        this.updateColorCode();
    }

    ngOnDestroy(): void {
        const color: Color = ColorHelper.hsvToRgb({ h: this.hValue, s: this.sValue, v: this.vValue });
        this.colorChange.next(color);
    }

    private updateColorCode(): void {
        this.hexColor = ColorHelper.hsvToHex({ h: this.hValue, s: this.sValue, v: this.vValue });
    }

    protected onHueChanged(): void {
        this.updateColorCode();
    }

    protected onHexCodeChange(evt: Event): void {
        const input = evt.currentTarget as HTMLInputElement;
        if (HexColorRegex.test(input.value)) {
            const color = ColorHelper.hexToHsv(input.value);
            this.hValue = color.h;
            this.sValue = color.s;
            this.vValue = color.v;

            this.updateColorCode();
        }
    }

    protected onColorCanvasChanged(color: ColorHsv): void {
        this.sValue = color.s;
        this.vValue = color.v;
        this.updateColorCode();
    }
}
