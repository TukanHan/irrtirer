import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrayMenuComponent } from './tray-menu.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { tilesSetMock } from '../../../../test-data/tiles-set.data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const initialState = {
    mosaicProject: {
        tilesSets: [tilesSetMock],
    },
};

describe('TrayMenuComponent', () => {
    let component: TrayMenuComponent;
    let fixture: ComponentFixture<TrayMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TrayMenuComponent, BrowserAnimationsModule, TranslateModule.forRoot({})],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();

        fixture = TestBed.createComponent(TrayMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
