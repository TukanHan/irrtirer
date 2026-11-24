import { TestBed } from '@angular/core/testing';
import { TileTreemap } from './tile-treemap';
import { beforeEach, describe, expect, it } from 'vitest';

describe('TileTreemap', () => {
    let service: TileTreemap;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TileTreemap],
        });
        service = TestBed.inject(TileTreemap);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
