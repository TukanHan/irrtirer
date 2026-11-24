import { TestBed } from '@angular/core/testing';
import { ConfigurationEventBus } from './configuration-event-bus';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ConfigurationEventBus', () => {
    let service: ConfigurationEventBus;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ConfigurationEventBus],
        });
        service = TestBed.inject(ConfigurationEventBus);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
