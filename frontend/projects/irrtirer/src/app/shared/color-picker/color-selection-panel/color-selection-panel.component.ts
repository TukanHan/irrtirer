import { ChangeDetectionStrategy, Component, computed, input, linkedSignal, OnDestroy, output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { ColorCanvasComponent } from './color-canvas/color-canvas.component';
import Color, { ColorInstance } from 'color';

const HexColorRegex: RegExp = /^#([0-9a-f]{3}){1,2}$/i;

@Component({
    selector: 'app-color-selection-panel',
    imports: [MatInputModule, FormsModule, ColorSliderComponent, ColorCanvasComponent],
    templateUrl: './color-selection-panel.component.html',
    styleUrl: './color-selection-panel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorSelectionPanelComponent implements OnDestroy {
    public readonly color = input.required<ColorInstance, string>({
        transform: (value: string) => Color(value),
    });

    public readonly colorChange = output<ColorInstance>();

    protected readonly hValue = linkedSignal({
        source: this.color,
        computation: (color: ColorInstance) => color.hue() / 360,
    });

    protected readonly sValue = linkedSignal({
        source: this.color,
        computation: (color: ColorInstance) => color.saturationv() / 100,
    });

    protected readonly vValue = linkedSignal({
        source: this.color,
        computation: (color: ColorInstance) => color.value() / 100,
    });

    protected readonly hexColor = computed<string>(() => Color({ h: this.hValue() * 360, s: this.sValue() * 100, v: this.vValue() * 100 }).hex());

    public ngOnDestroy(): void {
        const color: ColorInstance = Color({ h: this.hValue() * 360, s: this.sValue() * 100, v: this.vValue() * 100 });
        this.colorChange.emit(color);
    }

    protected onHexCodeChange(evt: Event): void {
        const input = evt.currentTarget as HTMLInputElement;
        if (HexColorRegex.test(input.value)) {
            const color: ColorInstance = Color(input.value);
            this.hValue.set(color.hue() / 360);
            this.sValue.set(color.saturationv() / 100);
            this.vValue.set(color.value() / 100);
        }
    }

    protected onColorCanvasChanged(color: ColorInstance): void {
        this.sValue.set(color.saturationv() / 100);
        this.vValue.set(color.value() / 100);
    }
}
