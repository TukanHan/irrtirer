import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MosaicGenerationComponent } from './mosaic-generation.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToolService } from '../tool.service';
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

describe('MosaicGenerationComponent', () => {
    let component: MosaicGenerationComponent;
    let fixture: ComponentFixture<MosaicGenerationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MosaicGenerationComponent, TranslateModule.forRoot({})],
            providers: [
                provideMockStore({ initialState }),
                { provide: MatSnackBar, useValue: mockMatSnackBar },
            ],
        }).compileComponents();

        vi.spyOn(ToolService, 'createImageObject').mockResolvedValue(imageObjectMock);

        fixture = TestBed.createComponent(MosaicGenerationComponent);
        component = fixture.componentInstance;
        component.sectionEntered(activeCanvas);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
