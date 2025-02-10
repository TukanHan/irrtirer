import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorPropertyEditorComponent } from './sector-property-editor.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { faceSector } from '../../../../test-data/sector.data';

describe('SectorPropertyEditorComponent', () => {
    let component: SectorPropertyEditorComponent;
    let fixture: ComponentFixture<SectorPropertyEditorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorPropertyEditorComponent, BrowserAnimationsModule],
            providers: [provideMockStore(), provideHttpClient(), provideHttpClientTesting()],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorPropertyEditorComponent);
        component = fixture.componentInstance;
        component.sector = faceSector;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
