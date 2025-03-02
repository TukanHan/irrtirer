import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectComponent } from './project.component';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { MosaicConfig } from '../../../core/models/mosaic-project.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const mosaicConfig: MosaicConfig = {
    base64Image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgMBA2ZYrHAAAAAASUVORK5CYII=',
    mosaicWidth: 1,
};

describe('ProjectComponent', () => {
    let component: ProjectComponent;
    let fixture: ComponentFixture<ProjectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProjectComponent, TranslateModule.forRoot({}), BrowserAnimationsModule],
            providers: [provideMockStore()],
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('mosaicConfig', mosaicConfig);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
