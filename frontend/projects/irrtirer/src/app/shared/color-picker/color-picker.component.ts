import { ChangeDetectionStrategy, Component, effect, forwardRef, input, model, signal } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { ColorSelectionPanelComponent } from './color-selection-panel/color-selection-panel.component';
import { ColorInstance } from 'color';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormValueControl } from '@angular/forms/signals';

@Component({
    selector: 'app-color-picker',
    imports: [OverlayModule, ColorSelectionPanelComponent],
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
export class ColorPickerComponent implements ControlValueAccessor, FormValueControl<string>  {
    public readonly label = input.required<string>();

    public readonly value = model<string>('#000000');

    public readonly disabled = model<boolean>(false);

    protected readonly isOpen = signal<boolean>(false);

    private onChange: (color: string) => void = () => {};

    private onTouched: () => void = () => {};

    protected readonly valueChangedEffect = effect(() => {
        this.onChange(this.value());
    });

    protected toggleColorPanel(): void {
        if(!this.disabled()) {
            this.isOpen.update((value) => !value);
        }
    }

    protected onColorChanged(color: ColorInstance): void {
        this.value.set(color.hex());
    }

    public writeValue(value: string): void {
        this.value.set(value);
    }

    public registerOnChange(fn: (color: string) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled.set(isDisabled);
    }
}
