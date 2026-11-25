import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tray } from './tray';
import { provideMockStore } from '@ngrx/store/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { tilesSetMock } from '../../../test-data/tiles-set.data';
import { activeCanvas } from '../../../test-data/active-canvas.data';
import { CanvasToolkit } from '../canvas-toolkit';

const initialState = {
    mosaicProject: {
        tilesSets: [tilesSetMock],
    },
};

describe('Tray', () => {
    let component: Tray;
    let fixture: ComponentFixture<Tray>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Tray],
            providers: [provideMockStore({ initialState }), { provide: CanvasToolkit, useValue: {} }],
        }).compileComponents();

        fixture = TestBed.createComponent(Tray);
        component = fixture.componentInstance;
        component.sectionEntered(activeCanvas);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
