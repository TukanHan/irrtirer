import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsContoursListComponent } from './sectors-contours-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('SectorsContoursListComponent', () => {
    let component: SectorsContoursListComponent;
    let fixture: ComponentFixture<SectorsContoursListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorsContoursListComponent, TranslateModule.forRoot({})],
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
