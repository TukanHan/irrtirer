import { describe, expect, it } from "vitest";
import { FormHelper } from "./form-helper";
import { FieldState } from "@angular/forms/signals";

describe('FormHelper', () => {
    const errorLabels = {
        min: () => "Min",
        max: () => "Max",
        required: () => "Required",
    };

    describe('getFieldErrorLabel', () => {
        it('should return null when no errors', () => {
            const field = { errors: () => [] as unknown[] } as FieldState<unknown>;
            const result = FormHelper.getFieldErrorLabel(field, errorLabels);
            expect(result).toBeNull();
        });

        it('should return error label when error and errorLabel found', () => {
            const field = { errors: () => [{ kind: 'min'}] } as FieldState<unknown>;
            const result = FormHelper.getFieldErrorLabel(field, errorLabels);
            expect(result).toEqual("Min");
        });

        it('should return null when no error label found', () => {
            const field = { errors: () => [{ kind: 'sth'}] } as FieldState<unknown>;
            const result = FormHelper.getFieldErrorLabel(field, errorLabels);
            expect(result).toBeNull();
        });
    });
});
