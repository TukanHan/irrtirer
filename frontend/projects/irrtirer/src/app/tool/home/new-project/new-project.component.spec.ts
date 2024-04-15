import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewProjectComponent } from './new-project.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('NewProjectComponent', () => {
    let component: NewProjectComponent;
    let fixture: ComponentFixture<NewProjectComponent>;
    const initialState = {};

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NewProjectComponent],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();

        fixture = TestBed.createComponent(NewProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
