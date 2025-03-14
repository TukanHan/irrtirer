import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorsComponent } from './sectors.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { faceSector } from '../../../test-data/sector.data';

const initialState = {
    mosaicProject: { sectors: [faceSector] },
};

describe('SectorsComponent', () => {
    let component: SectorsComponent;
    let fixture: ComponentFixture<SectorsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorsComponent, TranslateModule.forRoot({})],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
