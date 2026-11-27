import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { faceSector } from '../../../../test-data/sector.data';
import { SectorsEventBus } from '../sectors-event-bus';
import { SectorPropertyEditor } from './sector-property-editor';

describe('SectorPropertyEditor', () => {
    let component: SectorPropertyEditor;
    let fixture: ComponentFixture<SectorPropertyEditor>;

    const initialState = {
        mosaicProject: { sectors: [faceSector] },
    };

    const mockActivatedRoute = {
        snapshot: {
            paramMap: {
                get: (key: string) => (key === 'id' ? faceSector.id : null),
            },
        },
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorPropertyEditor],
            providers: [
                SectorsEventBus,
                provideMockStore({ initialState }),
                provideHttpClient(),
                provideHttpClientTesting(),
                provideTranslateService({}),
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorPropertyEditor);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
