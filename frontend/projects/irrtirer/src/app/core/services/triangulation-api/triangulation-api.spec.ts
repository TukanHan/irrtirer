import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { beforeEach, describe, expect, it } from 'vitest';
import { TriangulationApi } from './triangulation-api';

describe('TriangulationApi', () => {
    let triangulationApi: TriangulationApi;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient(), provideHttpClientTesting()],
        });
        triangulationApi = TestBed.inject(TriangulationApi);
    });

    it('should be created', () => {
        expect(triangulationApi).toBeTruthy();
    });
});
