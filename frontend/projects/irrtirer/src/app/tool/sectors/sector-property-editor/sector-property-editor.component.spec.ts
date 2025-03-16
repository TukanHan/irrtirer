import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorPropertyEditorComponent } from './sector-property-editor.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { faceSector } from '../../../../test-data/sector.data';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

describe('SectorPropertyEditorComponent', () => {
    let component: SectorPropertyEditorComponent;
    let fixture: ComponentFixture<SectorPropertyEditorComponent>;

    const initialState = {
        mosaicProject: { sectors: [faceSector] },
    };

    const mockActivatedRoute = {
        snapshot: {
            paramMap: {
                get: (key: string) => (key === 'id' ? faceSector.id : null),
            },
        },
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorPropertyEditorComponent, BrowserAnimationsModule, TranslateModule.forRoot({})],
            providers: [
                provideMockStore({ initialState }),
                provideHttpClient(),
                provideHttpClientTesting(),
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorPropertyEditorComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
