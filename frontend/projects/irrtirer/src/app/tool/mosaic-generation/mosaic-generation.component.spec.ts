import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicGenerationComponent } from './mosaic-generation.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('MosaicGenerationComponent', () => {
    let component: MosaicGenerationComponent;
    let fixture: ComponentFixture<MosaicGenerationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MosaicGenerationComponent, TranslateModule.forRoot({})],
            providers: [provideMockStore()],
        }).compileComponents();

        fixture = TestBed.createComponent(MosaicGenerationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
