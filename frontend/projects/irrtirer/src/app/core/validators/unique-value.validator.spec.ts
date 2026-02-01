import { describe, expect, it } from 'vitest';
import { nonUniqueValueValidationFunc } from './unique-value.validator';
import { signal } from '@angular/core';

describe('nonUniqueValueValidationFunc', () => {
    it('should be valid', () => {
        const result = nonUniqueValueValidationFunc(signal('d'), signal(['a', 'b', 'c']));
        expect(result).toBeNull();
    });

    it('should be valid (empty array)', () => {
        const result = nonUniqueValueValidationFunc(signal(false), signal<boolean[]>([]));
        expect(result).toBeNull();
    });

    it('should be non unique', () => {
        const result = nonUniqueValueValidationFunc(signal(3), signal([1, 2, 3]));
        expect(result?.kind).toEqual("nonUnique");
    });
});
