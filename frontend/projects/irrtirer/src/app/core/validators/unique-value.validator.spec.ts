import { describe, expect, it } from 'vitest';
import { nonUniqueValueValidatorFactory } from './unique-value.validator';
import { signal } from '@angular/core';

describe('nonUniqueValueValidatorFactory', () => {
    it('should be valid', () => {
        const validator = nonUniqueValueValidatorFactory(signal(['a', 'b', 'c']));
        const result = validator({ value: signal('d') });

        expect(result).toBeNull();
    });

    it('should be valid (empty array)', () => {
        const validator = nonUniqueValueValidatorFactory(signal([]));
        const result = validator({ value: signal(false) });

        expect(result).toBeNull();
    });

    it('should be non unique', () => {
        const validator = nonUniqueValueValidatorFactory(signal([1, 2, 3]));
        const result = validator({ value: signal(3) });

        expect(result.kind).toEqual("nonUnique");
    });
});
