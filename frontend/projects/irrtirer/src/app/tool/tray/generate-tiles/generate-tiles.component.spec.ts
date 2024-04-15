import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenerateTilesComponent } from './generate-tiles.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('GenerateTilesComponent', () => {
    let component: GenerateTilesComponent;
    let fixture: ComponentFixture<GenerateTilesComponent>;
    const initialState = {};

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GenerateTilesComponent, BrowserAnimationsModule],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();

        fixture = TestBed.createComponent(GenerateTilesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
