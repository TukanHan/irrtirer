import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsContoursListComponent } from './sectors-contours-list.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('SectorsContoursListComponent', () => {
    let component: SectorsContoursListComponent;
    let fixture: ComponentFixture<SectorsContoursListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorsContoursListComponent],
            providers: [provideMockStore()]
        }).compileComponents();

        fixture = TestBed.createComponent(SectorsContoursListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
