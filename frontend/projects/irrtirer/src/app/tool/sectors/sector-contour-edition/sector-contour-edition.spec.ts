import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { faceSector } from '../../../../test-data/sector.data';
import { SectorsEventBus } from '../sectors-event-bus';
import { SectorContourEdition } from './sector-contour-edition';

describe('SectorContourEdition', () => {
    let component: SectorContourEdition;
    let fixture: ComponentFixture<SectorContourEdition>;

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
            imports: [SectorContourEdition],
            providers: [
                SectorsEventBus,
                provideMockStore({ initialState }),
                provideTranslateService({}),
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorContourEdition);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
