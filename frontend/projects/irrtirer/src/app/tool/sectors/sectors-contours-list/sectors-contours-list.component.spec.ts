import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorsContoursListComponent } from './sectors-contours-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { faceSector } from '../../../../test-data/sector.data';
import { beforeEach, describe, expect, it } from 'vitest';

const initialState = {
    mosaicProject: { sectors: [faceSector] },
};

describe('SectorsContoursListComponent', () => {
    let component: SectorsContoursListComponent;
    let fixture: ComponentFixture<SectorsContoursListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorsContoursListComponent, TranslateModule.forRoot({})],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorsContoursListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
