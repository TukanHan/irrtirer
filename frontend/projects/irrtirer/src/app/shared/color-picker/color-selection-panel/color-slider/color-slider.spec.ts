import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorSlider } from './color-slider';
import { beforeEach, describe, expect, it } from 'vitest';
import { inputBinding } from '@angular/core';

describe('ColorSlider', () => {
    let component: ColorSlider;
    let fixture: ComponentFixture<ColorSlider>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorSlider],
        }).compileComponents();

        fixture = TestBed.createComponent(ColorSlider, {
            bindings: [inputBinding('value', () => 0)],
        });
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
