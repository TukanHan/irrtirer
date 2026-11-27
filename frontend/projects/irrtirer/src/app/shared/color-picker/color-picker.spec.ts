import { inputBinding } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ColorPicker } from './color-picker';

describe('ColorPicker', () => {
    let component: ColorPicker;
    let fixture: ComponentFixture<ColorPicker>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorPicker],
        }).compileComponents();

        fixture = TestBed.createComponent(ColorPicker, {
            bindings: [inputBinding('label', () => 'Color')],
        });
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
