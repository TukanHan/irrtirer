import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorContourEditionComponent } from './sector-contour-edition.component';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { faceSector } from '../../../../test-data/sector.data';

describe('SectorContourEditionComponent', () => {
    let component: SectorContourEditionComponent;
    let fixture: ComponentFixture<SectorContourEditionComponent>;

    const initialState = {
        mosaicProject: { sectors: [] },
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorContourEditionComponent, BrowserAnimationsModule],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorContourEditionComponent);
        component = fixture.componentInstance;
        component.sectorContour = {
            sector: faceSector,
            selectedVertex: null
        }

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
