import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigProject } from './config-project';
import { provideTranslateService } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { ConfigurationEventBus } from '../configuration-event-bus';
import { beforeEach, describe, expect, it } from 'vitest';

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

describe('ConfigProject', () => {
    let component: ConfigProject;
    let fixture: ComponentFixture<ConfigProject>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConfigProject],
            providers: [provideMockStore({ initialState }), provideTranslateService({}), ConfigurationEventBus],
        }).compileComponents();

        fixture = TestBed.createComponent(ConfigProject);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
