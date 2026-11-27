import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { App } from './app';

const initialState = {
    userPreferences: {
        lang: 'pl',
    },
};

describe('App', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [App],
            providers: [provideRouter([]), provideTranslateService({}), provideMockStore({ initialState })],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have the 'irrtirer' title`, () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('Irrtirer');
    });
});
