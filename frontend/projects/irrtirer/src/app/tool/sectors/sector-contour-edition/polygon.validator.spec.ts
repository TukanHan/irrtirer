import { polygonValidator } from './polygon.validator';
import { Vector } from '../../../core/models/math/vector.model';
import { describe, expect, it } from 'vitest';
import { signal } from '@angular/core';

describe('PolygonValidator', () => {
    it('should be too few vertices', () => {
        const vertices: Vector[] = [new Vector(0, 0)];
        const result = polygonValidator({ value: signal(vertices) });

        expect(result?.kind).toEqual("tooFewVertices");
    });

    it('should edges intersecting', () => {
        const vertices: Vector[] = [new Vector(0, 0), new Vector(2, 3), new Vector(1, -1), new Vector(3, 1)];
        const result = polygonValidator({ value: signal(vertices) });

        expect(result?.kind).toEqual("edgesIntersect");
    });
    
    it('should be valid', () => {
        const vertices: Vector[] = [new Vector(0, 0), new Vector(4, 0), new Vector(4, 3), new Vector(0, 3)];
        const result = polygonValidator({ value: signal(vertices) });

        expect(result).toBeNull();
    });
});
