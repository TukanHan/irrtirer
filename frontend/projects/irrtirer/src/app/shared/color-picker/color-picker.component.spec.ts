import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPickerComponent } from './color-picker.component';
import { beforeEach, describe, expect, it } from 'vitest';
import { inputBinding } from '@angular/core';

describe('ColorPickerComponent', () => {
    let component: ColorPickerComponent;
    let fixture: ComponentFixture<ColorPickerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorPickerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ColorPickerComponent, {
            bindings: [inputBinding('label', () => 'Color')],
        });
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
