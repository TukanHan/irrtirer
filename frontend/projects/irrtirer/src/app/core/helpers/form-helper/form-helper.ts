import { AbstractControl } from '@angular/forms';
import { FieldState } from '@angular/forms/signals';

export class FormHelper {
    public static getErrorLabel(control: AbstractControl, errorLabels: Record<string, () => string>): string {
        if (control.errors) {
            for (const key of Object.keys(control.errors)) {
                if (control.errors[key] && key in errorLabels) {
                    return errorLabels[key]();
                }
            }
        }

        return null;
    }

    public static getFieldErrorLabel(field: FieldState<unknown>, errorLabels: Record<string, () => string>): string {
        const errors = field.errors();
        for (const { kind } of errors) {
            if (kind in errorLabels) {
                return errorLabels[kind]();
            }
        }

        return null;
    }
}
