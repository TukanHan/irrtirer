import { FieldState } from '@angular/forms/signals';

export class FormHelper {
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
