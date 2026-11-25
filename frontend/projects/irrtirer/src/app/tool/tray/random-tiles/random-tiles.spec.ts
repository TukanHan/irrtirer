import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomTiles } from './random-tiles';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { tilesSetMock } from '../../../../test-data/tiles-set.data';
import { beforeEach, describe, expect, it } from 'vitest';
import { ActivatedRoute } from '@angular/router';

const initialState = {
    mosaicProject: {
        tilesSets: [tilesSetMock],
    },
};

const mockActivatedRoute = {
    snapshot: {
        paramMap: {
            get: (key: string) => (key === 'id' ? tilesSetMock.id : null),
        },
    },
};

describe('RandomTiles', () => {
    let component: RandomTiles;
    let fixture: ComponentFixture<RandomTiles>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RandomTiles],
            providers: [provideMockStore({ initialState }), { provide: ActivatedRoute, useValue: mockActivatedRoute }, provideTranslateService({})],
        }).compileComponents();

        fixture = TestBed.createComponent(RandomTiles);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
