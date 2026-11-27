import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { tilesSetMock } from '../../../../test-data/tiles-set.data';
import { TrayMenu } from './tray-menu';

const initialState = {
    mosaicProject: {
        tilesSets: [tilesSetMock],
    },
};

describe('TrayMenu', () => {
    let component: TrayMenu;
    let fixture: ComponentFixture<TrayMenu>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TrayMenu],
            providers: [provideTranslateService({}), provideMockStore({ initialState })],
        }).compileComponents();

        fixture = TestBed.createComponent(TrayMenu);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
