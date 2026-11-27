import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, effect, forwardRef, input, model, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormValueControl } from '@angular/forms/signals';
import { ColorInstance } from 'color';
import { ColorSelectionPanel } from './color-selection-panel/color-selection-panel';

@Component({
    selector: 'app-color-picker',
    imports: [CdkConnectedOverlay, CdkOverlayOrigin, ColorSelectionPanel],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ColorPicker),
            multi: true,
        },
    ],
    template: `
        <div class="flex flex-col">
            <span class="text-base text-contrast-highest">{{ label() }}</span>
            <span class="text-sm text-contrast-medium">{{ value() }}</span>
        </div>

        <div
            role="presentation"
            class="color-preview"
            [class.disabled]="disabled()"
            [style.background-color]="value()"
            (click)="toggleColorPanel()"
            cdkOverlayOrigin
            #trigger="cdkOverlayOrigin"
        ></div>

        <ng-template
            cdkConnectedOverlay
            [cdkConnectedOverlayOrigin]="trigger"
            [cdkConnectedOverlayOpen]="isOpen()"
            [cdkConnectedOverlayHasBackdrop]="isOpen()"
            [cdkConnectedOverlayBackdropClass]="'cdk-overlay-transparent-backdrop-cs'"
            (backdropClick)="toggleColorPanel()"
        >
            <app-color-selection-panel [color]="value()" (colorChange)="onColorChanged($event)" />
        </ng-template>
    `,
    styleUrl: './color-picker.scss',
})
export class ColorPicker implements ControlValueAccessor, FormValueControl<string> {
    public readonly label = input.required<string>();

    public readonly value = model<string>('#000000');

    public readonly disabled = model<boolean>(false);

    protected readonly isOpen = signal<boolean>(false);

    private onChange: (color: string) => void = () => {};

    private onTouched: () => void = () => {};

    protected readonly valueChangedEffect = effect(() => {
        this.onChange(this.value());
    });

    protected readonly touchedEffect = effect(() => {
        this.onTouched();
    });

    protected toggleColorPanel(): void {
        if (!this.disabled()) {
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
