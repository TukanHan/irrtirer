import { inputBinding } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ColorSlider } from './color-slider';

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
