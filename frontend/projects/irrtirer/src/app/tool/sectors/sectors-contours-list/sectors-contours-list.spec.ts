import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { faceSector } from '../../../../test-data/sector.data';
import { SectorsEventBus } from '../sectors-event-bus';
import { SectorsContoursList } from './sectors-contours-list';

const initialState = {
    mosaicProject: { sectors: [faceSector] },
};

describe('SectorsContoursList', () => {
    let component: SectorsContoursList;
    let fixture: ComponentFixture<SectorsContoursList>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorsContoursList],
            providers: [SectorsEventBus, provideMockStore({ initialState }), provideTranslateService({})],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorsContoursList);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
