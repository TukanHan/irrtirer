import { AbstractControl } from '@angular/forms';

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
}
