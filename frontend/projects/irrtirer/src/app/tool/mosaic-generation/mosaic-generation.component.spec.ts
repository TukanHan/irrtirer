import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MosaicGenerationComponent } from './mosaic-generation.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToolService } from '../tool.service';
import { imageObjectMock } from '../../../test-data/image-object.data';
import { activeCanvas } from '../../../test-data/active-canvas.data';
import { faceSector } from '../../../test-data/sector.data';

const initialState = {
    mosaicProject: { 
        sectors: [faceSector],
        config: {}
    },
};

describe('MosaicGenerationComponent', () => {
    let component: MosaicGenerationComponent;
    let fixture: ComponentFixture<MosaicGenerationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MosaicGenerationComponent, TranslateModule.forRoot({})],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();

        jest.spyOn(ToolService, 'createImageObject').mockResolvedValue(imageObjectMock);

        fixture = TestBed.createComponent(MosaicGenerationComponent);
        component = fixture.componentInstance;
        component.sectionEntered(activeCanvas);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
