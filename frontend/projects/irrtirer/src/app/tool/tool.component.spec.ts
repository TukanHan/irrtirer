import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { ToolComponent } from './tool.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterModule } from '@angular/router';

describe('ToolComponent', () => {
    let component: ToolComponent;
    let fixture: ComponentFixture<ToolComponent>;
    const initialState = {};

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ToolComponent, BrowserAnimationsModule, RouterModule.forRoot([])],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();

        fixture = TestBed.createComponent(ToolComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
