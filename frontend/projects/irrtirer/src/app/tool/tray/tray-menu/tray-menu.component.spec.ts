import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrayMenuComponent } from './tray-menu.component';
import { provideMockStore } from '@ngrx/store/testing';
import { tilesSetMock } from '../../../../test-data/tiles-set.data';
import { beforeEach, describe, expect, it } from 'vitest';
import { provideTranslateService } from '@ngx-translate/core';

const initialState = {
    mosaicProject: {
        tilesSets: [tilesSetMock],
    },
};

describe('TrayMenuComponent', () => {
    let component: TrayMenuComponent;
    let fixture: ComponentFixture<TrayMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TrayMenuComponent],
            providers: [provideTranslateService({}), provideMockStore({ initialState })],
        }).compileComponents();

        fixture = TestBed.createComponent(TrayMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
