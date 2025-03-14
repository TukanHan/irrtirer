import { ChangeDetectionStrategy, Component, forwardRef, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ColorSelectionPanelComponent } from './color-selection-panel/color-selection-panel.component';
import { ColorInstance } from 'color';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-color-picker',
    imports: [CommonModule, OverlayModule, ColorSelectionPanelComponent],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ColorPickerComponent),
            multi: true,
        },
    ],
    templateUrl: './color-picker.component.html',
    styleUrl: './color-picker.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent implements ControlValueAccessor {
    public label: InputSignal<string> = input.required();

    protected hexColorSignal: WritableSignal<string> = signal('#000000');

    protected isOpenSignal: WritableSignal<boolean> = signal(false);

    protected isDisabledSignal: WritableSignal<boolean> = signal(false);

    private onChange: (color: string) => void = () => {};

    private onTouched: () => void = () => {};

    protected toggleColorPanel(): void {
        if(!this.isDisabledSignal()) {
            this.isOpenSignal.update((value) => !value);
        }
    }

    protected onColorChanged(color: ColorInstance): void {
        this.hexColorSignal.set(color.hex());
        this.onChange(color.hex());
    }

    public writeValue(value: string): void {
        this.hexColorSignal.set(value);
    }

    public registerOnChange(fn: (color: string) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.isDisabledSignal.set(isDisabled);
    }
}
