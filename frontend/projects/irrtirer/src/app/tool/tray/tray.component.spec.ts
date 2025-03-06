import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrayComponent } from './tray.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('TrayComponent', () => {
    let component: TrayComponent;
    let fixture: ComponentFixture<TrayComponent>;
    const initialState = {};

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TrayComponent, BrowserAnimationsModule],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();

        fixture = TestBed.createComponent(TrayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
