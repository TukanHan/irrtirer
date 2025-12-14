import { TestBed } from '@angular/core/testing';
import { ToolService } from './tool.service';
import { beforeEach, describe, expect, it } from 'vitest';
import { provideMockStore } from '@ngrx/store/testing';

describe('ToolService', () => {
    let service: ToolService;
    const initialState = {};

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ToolService, provideMockStore({ initialState })],
        });
        service = TestBed.inject(ToolService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
