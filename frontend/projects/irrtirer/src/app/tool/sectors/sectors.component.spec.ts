import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorsComponent } from './sectors.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { faceSector } from '../../../test-data/sector.data';
import { ToolService } from '../tool.service';
import { activeCanvas } from '../../../test-data/active-canvas.data';
import { imageObjectMock } from '../../../test-data/image-object.data';
import { beforeEach, describe, expect, it } from 'vitest';

const initialState = {
    mosaicProject: { sectors: [faceSector] },
};

describe('SectorsComponent', () => {
    let component: SectorsComponent;
    let fixture: ComponentFixture<SectorsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorsComponent, TranslateModule.forRoot({})],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();

        jest.spyOn(ToolService, 'createImageObject').mockResolvedValue(imageObjectMock);

        fixture = TestBed.createComponent(SectorsComponent);
        component = fixture.componentInstance;
        component.sectionEntered(activeCanvas);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
