import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ConfigurationEventBus } from './configuration-event-bus';

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
