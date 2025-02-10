import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicHierarchyComponent } from './mosaic-hierarchy.component';
import { MosaicGenerationService } from '../mosaic-generation.service';

describe('MosaicHierarchyComponent', () => {
    let component: MosaicHierarchyComponent;
    let fixture: ComponentFixture<MosaicHierarchyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MosaicHierarchyComponent],
            providers: [MosaicGenerationService]
        }).compileComponents();

        fixture = TestBed.createComponent(MosaicHierarchyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
