import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TileListElemComponent } from './tile-list-elem.component';
import { tileMock } from '../../../../../test-data/tiles-set.data';
import { TranslateModule } from '@ngx-translate/core';

describe('TileListElemComponent', () => {
    let component: TileListElemComponent;
    let fixture: ComponentFixture<TileListElemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TileListElemComponent, TranslateModule.forRoot({})],
        }).compileComponents();

        fixture = TestBed.createComponent(TileListElemComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('tile', tileMock);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
