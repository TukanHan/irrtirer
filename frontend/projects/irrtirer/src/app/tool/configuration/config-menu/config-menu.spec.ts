import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigMenu } from './config-menu';
import { provideTranslateService } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { ConfigurationEventBus } from '../configuration-event-bus';
import { beforeEach, describe, expect, it } from 'vitest';
import { ProjectArchive } from '../../../core/services/project-archive/project-archive';

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

describe('ConfigMenu', () => {
    let component: ConfigMenu;
    let fixture: ComponentFixture<ConfigMenu>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConfigMenu],
            providers: [provideMockStore({ initialState }), provideTranslateService({}), ConfigurationEventBus, ProjectArchive],
        }).compileComponents();

        fixture = TestBed.createComponent(ConfigMenu);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
