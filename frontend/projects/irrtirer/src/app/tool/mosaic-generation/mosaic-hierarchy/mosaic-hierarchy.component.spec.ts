import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MosaicHierarchyComponent } from './mosaic-hierarchy.component';
import { MosaicGenerationState } from '../mosaic-generation-state';
import { describe, beforeEach, it, expect } from 'vitest';

describe('MosaicHierarchyComponent', () => {
    let component: MosaicHierarchyComponent;
    let fixture: ComponentFixture<MosaicHierarchyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MosaicHierarchyComponent],
            providers: [MosaicGenerationState],
        }).compileComponents();

        fixture = TestBed.createComponent(MosaicHierarchyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
