import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TileDetailComponent } from './tile-detail.component';
import { RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('TileDetailComponent', () => {
    let component: TileDetailComponent;
    let fixture: ComponentFixture<TileDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TileDetailComponent, RouterModule.forRoot([]), TranslateModule.forRoot({})],
            providers: [provideMockStore()]
        }).compileComponents();

        fixture = TestBed.createComponent(TileDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
