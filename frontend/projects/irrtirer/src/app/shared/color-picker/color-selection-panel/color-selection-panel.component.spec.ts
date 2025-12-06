import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorSelectionPanelComponent } from './color-selection-panel.component';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ColorSelectionPanelComponent', () => {
    let component: ColorSelectionPanelComponent;
    let fixture: ComponentFixture<ColorSelectionPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorSelectionPanelComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ColorSelectionPanelComponent);
        fixture.componentRef.setInput('color', '#ff0000');

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
