import { AbstractControl } from '@angular/forms';
import { polygonValidator } from './polygon.validator';
import { Vector } from '../../../core/models/math/vector.model';
import { describe, expect, it } from 'vitest';

describe('PolygonValidator', () => {
    it('should be too few vertices', () => {
        const vertices: Vector[] = [new Vector(0, 0)];
        const result = polygonValidator()({ value: vertices } as AbstractControl);

        expect(result).toEqual({ tooFewVertices: true });
    });

    it('should edges intersecting', () => {
        const vertices: Vector[] = [new Vector(0, 0), new Vector(2, 3), new Vector(1, -1), new Vector(3, 1)];
        const result = polygonValidator()({ value: vertices } as AbstractControl);

        expect(result).toEqual({ edgesIntersect: true });
    });
    
    it('should be valid', () => {
        const vertices: Vector[] = [new Vector(0, 0), new Vector(4, 0), new Vector(4, 3), new Vector(0, 3)];
        const result = polygonValidator()({ value: vertices } as AbstractControl);

        expect(result).toBeNull();
    });
});
