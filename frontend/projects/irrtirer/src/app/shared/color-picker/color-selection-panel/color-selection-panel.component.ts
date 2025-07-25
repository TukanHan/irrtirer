import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy, output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { ColorCanvasComponent } from './color-canvas/color-canvas.component';
import Color, { ColorInstance } from 'color';

const HexColorRegex: RegExp = /^#([0-9a-f]{3}){1,2}$/i;

@Component({
    selector: 'app-color-selection-panel',
    imports: [MatInputModule, FormsModule, CommonModule, ColorSliderComponent, ColorCanvasComponent],
    templateUrl: './color-selection-panel.component.html',
    styleUrl: './color-selection-panel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorSelectionPanelComponent implements AfterViewInit, OnDestroy {
    @Input()
    public set color(value: string) {
        const hsvColor = Color(value);
        this.hValue = hsvColor.hue() / 360;
        this.sValue = hsvColor.saturationv() / 100;
        this.vValue = hsvColor.value() / 100;
    }

    public readonly colorChange = output<ColorInstance>();

    protected hexColor: string = 'blue';

    protected hValue: number = 0;
    protected sValue: number = 0;
    protected vValue: number = 0;

    public ngAfterViewInit(): void {
        this.updateColorCode();
    }

    public ngOnDestroy(): void {
        const color: ColorInstance = Color({ h: this.hValue * 360, s: this.sValue * 100, v: this.vValue * 100 });
        this.colorChange.emit(color);
    }

    private updateColorCode(): void {
        this.hexColor = Color({ h: this.hValue * 360, s: this.sValue * 100, v: this.vValue * 100 }).hex();
    }

    protected onHueChanged(): void {
        this.updateColorCode();
    }

    protected onHexCodeChange(evt: Event): void {
        const input = evt.currentTarget as HTMLInputElement;
        if (HexColorRegex.test(input.value)) {
            const color: ColorInstance = Color(input.value);
            this.hValue = color.hue() / 360;
            this.sValue = color.saturationv() / 100;
            this.vValue = color.value() / 100;

            this.updateColorCode();
        }
    }

    protected onColorCanvasChanged(color: ColorInstance): void {
        this.sValue = color.saturationv() / 100;
        this.vValue = color.value() / 100;
        this.updateColorCode();
    }
}
