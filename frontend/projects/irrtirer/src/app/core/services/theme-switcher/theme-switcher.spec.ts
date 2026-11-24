import { TestBed } from '@angular/core/testing';
import { ThemeSwitcher } from './theme-switcher';
import { beforeEach, describe, expect, it } from 'vitest';
import { provideMockStore } from '@ngrx/store/testing';

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
