import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrayComponent } from './tray.component';
import { provideMockStore } from '@ngrx/store/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { tilesSetMock } from '../../../test-data/tiles-set.data';
import { activeCanvas } from '../../../test-data/active-canvas.data';
import { ToolService } from '../tool.service';

const initialState = {
    mosaicProject: {
        tilesSets: [tilesSetMock],
    },
};

describe('TrayComponent', () => {
    let component: TrayComponent;
    let fixture: ComponentFixture<TrayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TrayComponent],
            providers: [provideMockStore({ initialState }), { provide: ToolService, useValue: {} }],
        }).compileComponents();

        fixture = TestBed.createComponent(TrayComponent);
        component = fixture.componentInstance;
        component.sectionEntered(activeCanvas);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
