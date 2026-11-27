import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ThemeSwitcher } from './theme-switcher';

const initialState = {};

describe('ThemeSwitcher', () => {
    let service: ThemeSwitcher;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideMockStore({ initialState })],
        });
        service = TestBed.inject(ThemeSwitcher);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
