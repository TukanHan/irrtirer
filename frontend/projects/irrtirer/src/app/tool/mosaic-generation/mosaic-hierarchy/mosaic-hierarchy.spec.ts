import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { MosaicGenerationState } from '../mosaic-generation-state';
import { MosaicHierarchy } from './mosaic-hierarchy';

describe('MosaicHierarchy', () => {
    let component: MosaicHierarchy;
    let fixture: ComponentFixture<MosaicHierarchy>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MosaicHierarchy],
            providers: [MosaicGenerationState],
        }).compileComponents();

        fixture = TestBed.createComponent(MosaicHierarchy);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
