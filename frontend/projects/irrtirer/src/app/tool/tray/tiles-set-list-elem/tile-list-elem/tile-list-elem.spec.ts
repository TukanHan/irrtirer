import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TileListElem } from './tile-list-elem';
import { tileMock } from '../../../../../test-data/tiles-set.data';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { inputBinding } from '@angular/core';

describe('TileListElem', () => {
    let component: TileListElem;
    let fixture: ComponentFixture<TileListElem>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TileListElem],
            providers: [provideTranslateService({})],
        }).compileComponents();

        fixture = TestBed.createComponent(TileListElem, {
            bindings: [inputBinding('tile', () => tileMock)],
        });

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
