import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorsContoursList } from './sectors-contours-list';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { faceSector } from '../../../../test-data/sector.data';
import { beforeEach, describe, expect, it } from 'vitest';

const initialState = {
    mosaicProject: { sectors: [faceSector] },
};

describe('SectorsContoursList', () => {
    let component: SectorsContoursList;
    let fixture: ComponentFixture<SectorsContoursList>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorsContoursList],
            providers: [provideMockStore({ initialState }), provideTranslateService({})],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorsContoursList);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
