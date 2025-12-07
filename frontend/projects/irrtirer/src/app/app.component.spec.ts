import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { APP_BASE_HREF } from '@angular/common';

const initialState = {
    userPreferences: {
        lang: 'pl',
    },
};

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent, RouterModule.forRoot([]), TranslateModule.forRoot({})],
            providers: [provideMockStore({ initialState }), { provide: APP_BASE_HREF, useValue: '/' }],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have the 'irrtirer' title`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('Irrtirer');
    });
});
