import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { Tool } from './tool';

describe('Tool', () => {
    let component: Tool;
    let fixture: ComponentFixture<Tool>;
    const initialState = {
        mosaicProject: {
            config: {
                base64Image: '',
                mosaicWidth: 100,
            },
            tilesSets: [],
            sectors: [],
        },
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Tool],
            providers: [provideRouter([]), provideMockStore({ initialState }), provideTranslateService({})],
        }).compileComponents();

        fixture = TestBed.createComponent(Tool);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
