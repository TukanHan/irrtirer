import { TestBed } from '@angular/core/testing';
import { ConfigurationService } from './configuration.service';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ConfigurationService', () => {
    let service: ConfigurationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ConfigurationService],
        });
        service = TestBed.inject(ConfigurationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
