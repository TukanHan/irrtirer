import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorsComponent } from './sectors.component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { faceSector } from '../../../test-data/sector.data';
import { CanvasToolkit } from '../canvas-toolkit';
import { activeCanvas } from '../../../test-data/active-canvas.data';
import { imageObjectMock } from '../../../test-data/image-object.data';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const initialState = {
    mosaicProject: { sectors: [faceSector] },
};

describe('SectorsComponent', () => {
    let component: SectorsComponent;
    let fixture: ComponentFixture<SectorsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorsComponent],
            providers: [provideMockStore({ initialState }), { provide: CanvasToolkit, useValue: {} }, provideTranslateService({})],
        }).compileComponents();

        vi.spyOn(CanvasToolkit, 'createImageObject').mockResolvedValue(imageObjectMock);

        fixture = TestBed.createComponent(SectorsComponent);
        component = fixture.componentInstance;
        component.sectionEntered(activeCanvas, true);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
