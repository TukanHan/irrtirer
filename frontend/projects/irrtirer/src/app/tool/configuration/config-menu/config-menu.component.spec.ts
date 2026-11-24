import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigMenuComponent } from './config-menu.component';
import { provideTranslateService } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { ConfigurationService } from '../configuration.service';
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

describe('ConfigMenuComponent', () => {
    let component: ConfigMenuComponent;
    let fixture: ComponentFixture<ConfigMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConfigMenuComponent],
            providers: [provideMockStore({ initialState }), provideTranslateService({}), ConfigurationService, ProjectArchive],
        }).compileComponents();

        fixture = TestBed.createComponent(ConfigMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
