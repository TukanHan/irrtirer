import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nonUniqueValueValidator<T>(values: T[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (values.includes(value)) {
            return { nonUnique: true };
        }
        
        return null;
    };
}
