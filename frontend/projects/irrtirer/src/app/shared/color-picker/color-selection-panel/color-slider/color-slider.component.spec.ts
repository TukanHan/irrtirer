import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorSliderComponent } from './color-slider.component';
import { beforeEach, describe, expect, it } from 'vitest';
import { inputBinding } from '@angular/core';

describe('ColorSliderComponent', () => {
    let component: ColorSliderComponent;
    let fixture: ComponentFixture<ColorSliderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorSliderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ColorSliderComponent, {
            bindings: [inputBinding('value', () => 0)],
        });
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
