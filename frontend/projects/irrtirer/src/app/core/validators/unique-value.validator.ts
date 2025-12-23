import { Signal } from '@angular/core';
import { customError, CustomValidationError, WithoutField } from '@angular/forms/signals';

export function nonUniqueValueValidatorFactory<T>(array: Signal<T[]>) {
    return ({ value }: { value: Signal<T> }): WithoutField<CustomValidationError> => {
        if (array().includes(value())) {
            return customError({ kind: 'nonUnique' });
        }
        
        return null;
    };
}
