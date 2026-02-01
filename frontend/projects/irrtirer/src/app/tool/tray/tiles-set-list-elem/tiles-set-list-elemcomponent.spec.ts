import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TilesSetListElemComponent } from './tiles-set-list-elem.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { tilesSetMock } from '../../../../test-data/tiles-set.data';
import { inputBinding } from '@angular/core';

describe('TilesSetListElemComponent', () => {
    let component: TilesSetListElemComponent;
    let fixture: ComponentFixture<TilesSetListElemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TilesSetListElemComponent, TranslateModule.forRoot({})],
            providers: [provideMockStore()],
        }).compileComponents();

        fixture = TestBed.createComponent(TilesSetListElemComponent, {
            bindings: [inputBinding('tilesSet', () => tilesSetMock)],
        });
        
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
