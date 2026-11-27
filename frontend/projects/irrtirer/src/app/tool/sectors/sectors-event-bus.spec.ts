import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { SectorsEventBus } from './sectors-event-bus';

describe('SectorsEventBus', () => {
    let service: SectorsEventBus;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SectorsEventBus);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
