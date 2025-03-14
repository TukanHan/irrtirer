import { nonUniqueValueValidator } from './unique-value.validator';
import { AbstractControl } from '@angular/forms';

describe('NonUniqueValueValidator', () => {
    it('should be valid', () => {
        const validator = nonUniqueValueValidator(['a', 'b', 'c']);
        const result = validator({ value: 'd'} as AbstractControl);

        expect(result).toBeNull();
    });

    it('should be valid (empty array)', () => {
        const validator = nonUniqueValueValidator([]);
        const result = validator({ value: false} as AbstractControl);

        expect(result).toBeNull();
    });

    it('should be non unique', () => {
        const validator = nonUniqueValueValidator([1, 2, 3]);
        const result = validator({ value: 3} as AbstractControl);

        expect(result).toEqual({ nonUnique: true});
    });
});
