import { TestBed } from '@angular/core/testing';
import { MosaicGenerationState } from './mosaic-generation-state';
import { beforeEach, describe, expect, it } from 'vitest';

describe('MosaicGenerationState', () => {
    let service: MosaicGenerationState;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MosaicGenerationState],
        });
        service = TestBed.inject(MosaicGenerationState);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
