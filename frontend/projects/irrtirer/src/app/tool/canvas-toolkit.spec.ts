import { TestBed } from '@angular/core/testing';
import { CanvasToolkit } from './canvas-toolkit';
import { beforeEach, describe, expect, it } from 'vitest';
import { provideMockStore } from '@ngrx/store/testing';

describe('CanvasToolkit', () => {
    let service: CanvasToolkit;
    const initialState = {};

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CanvasToolkit, provideMockStore({ initialState })],
        });
        service = TestBed.inject(CanvasToolkit);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
