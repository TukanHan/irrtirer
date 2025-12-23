import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomTilesComponent } from './random-tiles.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
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

describe('RandomTilesComponent', () => {
    let component: RandomTilesComponent;
    let fixture: ComponentFixture<RandomTilesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RandomTilesComponent, TranslateModule.forRoot({})],
            providers: [provideMockStore({ initialState }), { provide: ActivatedRoute, useValue: mockActivatedRoute }],
        }).compileComponents();

        fixture = TestBed.createComponent(RandomTilesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
