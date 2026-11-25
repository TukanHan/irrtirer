import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MosaicGeneration } from './mosaic-generation';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { CanvasToolkit } from '../canvas-toolkit';
import { imageObjectMock } from '../../../test-data/image-object.data';
import { activeCanvas } from '../../../test-data/active-canvas.data';
import { faceSector } from '../../../test-data/sector.data';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MatSnackBar } from '@angular/material/snack-bar';

const initialState = {
    mosaicProject: {
        sectors: [faceSector],
        config: {},
    },
};

export const mockMatSnackBar = {
    open: vi.fn(() => ({ dismiss: vi.fn() })),
    dismiss: vi.fn(),
};

describe('MosaicGeneration', () => {
    let component: MosaicGeneration;
    let fixture: ComponentFixture<MosaicGeneration>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MosaicGeneration],
            providers: [
                provideMockStore({ initialState }),
                provideTranslateService({}),
                { provide: MatSnackBar, useValue: mockMatSnackBar },
                { provide: CanvasToolkit, useValue: {} },
            ],
        }).compileComponents();

        vi.spyOn(CanvasToolkit, 'createImageObject').mockResolvedValue(imageObjectMock);

        fixture = TestBed.createComponent(MosaicGeneration);
        component = fixture.componentInstance;
        component.sectionEntered(activeCanvas, true);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
