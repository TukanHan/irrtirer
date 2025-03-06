import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TilesSetListElemComponent } from './tiles-set-list-elem.component';
import { TilesSet } from '../../../core/models/mosaic-project.model';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('TilesSetListElemComponent', () => {
    let component: TilesSetListElemComponent;
    let fixture: ComponentFixture<TilesSetListElemComponent>;
    const tilesSet: TilesSet = {
        name: 'Test set',
        tiles: [],
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TilesSetListElemComponent, BrowserAnimationsModule, TranslateModule.forRoot({})],
            providers: [provideMockStore()],
        }).compileComponents();

        fixture = TestBed.createComponent(TilesSetListElemComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('tilesSet', tilesSet);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
