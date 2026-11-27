import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { ConfigurationEventBus } from '../configuration-event-bus';
import { ConfigProject } from './config-project';

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
