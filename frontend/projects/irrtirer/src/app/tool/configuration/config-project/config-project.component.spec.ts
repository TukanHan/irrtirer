import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigProjectComponent } from './config-project.component';
import { provideTranslateService } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { ConfigurationService } from '../configuration.service';
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

describe('ConfigProjectComponent', () => {
    let component: ConfigProjectComponent;
    let fixture: ComponentFixture<ConfigProjectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConfigProjectComponent],
            providers: [provideMockStore({ initialState }), provideTranslateService({}), ConfigurationService],
        }).compileComponents();

        fixture = TestBed.createComponent(ConfigProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
