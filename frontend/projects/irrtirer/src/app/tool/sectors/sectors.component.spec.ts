import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsComponent } from './sectors.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('SectorsComponent', () => {
    let component: SectorsComponent;
    let fixture: ComponentFixture<SectorsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorsComponent, TranslateModule.forRoot({})],
            providers: [provideMockStore()],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
