import { inputBinding } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ColorSelectionPanel } from './color-selection-panel';

describe('ColorSelectionPanel', () => {
    let component: ColorSelectionPanel;
    let fixture: ComponentFixture<ColorSelectionPanel>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorSelectionPanel],
        }).compileComponents();

        fixture = TestBed.createComponent(ColorSelectionPanel, {
            bindings: [inputBinding('color', () => '#ff0000')],
        });

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
