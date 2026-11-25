import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TilesSetListElem } from './tiles-set-list-elem';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { tilesSetMock } from '../../../../test-data/tiles-set.data';
import { inputBinding } from '@angular/core';

describe('TilesSetListElem', () => {
    let component: TilesSetListElem;
    let fixture: ComponentFixture<TilesSetListElem>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TilesSetListElem],
            providers: [provideMockStore(), provideTranslateService({})],
        }).compileComponents();

        fixture = TestBed.createComponent(TilesSetListElem, {
            bindings: [inputBinding('tilesSet', () => tilesSetMock)],
        });

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
