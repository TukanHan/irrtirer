import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsContoursListComponent } from './sectors-contours-list.component';

describe('SectorsContoursListComponent', () => {
    let component: SectorsContoursListComponent;
    let fixture: ComponentFixture<SectorsContoursListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorsContoursListComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorsContoursListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
