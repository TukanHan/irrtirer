import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { activeCanvas } from '../../../test-data/active-canvas.data';
import { imageObjectMock } from '../../../test-data/image-object.data';
import { faceSector } from '../../../test-data/sector.data';
import { CanvasToolkit } from '../canvas-toolkit';
import { Sectors } from './sectors';

const initialState = {
    mosaicProject: { sectors: [faceSector] },
};

describe('Sectors', () => {
    let component: Sectors;
    let fixture: ComponentFixture<Sectors>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Sectors],
            providers: [provideMockStore({ initialState }), { provide: CanvasToolkit, useValue: {} }, provideTranslateService({})],
        }).compileComponents();

        vi.spyOn(CanvasToolkit, 'createImageObject').mockResolvedValue(imageObjectMock);

        fixture = TestBed.createComponent(Sectors);
        component = fixture.componentInstance;
        component.sectionEntered(activeCanvas, true);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
