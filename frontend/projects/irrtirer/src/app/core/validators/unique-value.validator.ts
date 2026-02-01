import { Signal } from '@angular/core';
import { SchemaPath, validate } from '@angular/forms/signals';

export function nonUniqueValueValidator<T>(field: SchemaPath<T>, array: Signal<T[]>): void {
    validate(field, ({ value }) => nonUniqueValueValidationFunc(value, array));
}

export function nonUniqueValueValidationFunc<T>(value: Signal<T>, array: Signal<T[]>): { kind: string } | null {
    if (array().includes(value())) {
        return { kind: 'nonUnique' };
    }
    
    return null;
}