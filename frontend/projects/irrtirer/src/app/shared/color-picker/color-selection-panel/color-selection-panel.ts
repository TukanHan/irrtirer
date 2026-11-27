import { Component, computed, input, linkedSignal, OnDestroy, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import Color, { ColorInstance } from 'color';
import { ColorCanvas } from './color-canvas/color-canvas';
import { ColorSlider } from './color-slider/color-slider';

const HexColorRegex: RegExp = /^#([0-9a-f]{3}){1,2}$/i;

@Component({
    selector: 'app-color-selection-panel',
    imports: [MatInputModule, FormsModule, ColorSlider, ColorCanvas],
    template: `
        <div class="sv-preview">
            <app-color-canvas [hValue]="hValue()" [sValue]="sValue()" [vValue]="vValue()" (colorChange)="onColorCanvasChanged($event)" />
        </div>

        <div class="slider-container">
            <app-color-slider [(value)]="hValue" />
        </div>

        <div class="result-wrapper">
            <div role="presentation" class="color-preview" [style.background]="hexColor()"></div>

            <mat-form-field class="density-3 code-input" appearance="outline">
                <mat-label>Hex</mat-label>
                <input matInput [ngModel]="hexColor()" (change)="onHexCodeChange($event)" />
            </mat-form-field>
        </div>
    `,
    styleUrl: './color-selection-panel.scss',
})
export class ColorSelectionPanel implements OnDestroy {
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
