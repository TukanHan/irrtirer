import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { RouterModule } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { beforeEach, describe, expect, it } from 'vitest';

const initialState = {
    userPreferences: {
        lang: 'pl',
    },
};

describe('App', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [App, RouterModule.forRoot([])],
            providers: [provideTranslateService({}), provideMockStore({ initialState })],
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
