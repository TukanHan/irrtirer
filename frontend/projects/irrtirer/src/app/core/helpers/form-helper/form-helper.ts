import { FieldState, ValidationError } from '@angular/forms/signals';

export class FormHelper {
    public static getFieldErrorLabel(field: FieldState<unknown>, errorLabels: Record<string, () => string>): string {
        return this.getErrorLabel(field.errors(), errorLabels);
    }

    public static getErrorLabel(errors: ValidationError.WithField[], errorLabels: Record<string, () => string>): string {
        for (const { kind } of errors) {
            if (kind in errorLabels) {
                return errorLabels[kind]();
            }
        }

        return null;
    }
}
