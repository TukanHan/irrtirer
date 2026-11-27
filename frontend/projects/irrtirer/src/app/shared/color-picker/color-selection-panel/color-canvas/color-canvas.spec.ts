import { inputBinding } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ColorCanvas } from './color-canvas';

describe('ColorCanvas', () => {
    let component: ColorCanvas;
    let fixture: ComponentFixture<ColorCanvas>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorCanvas],
        }).compileComponents();

        fixture = TestBed.createComponent(ColorCanvas, {
            bindings: [inputBinding('hValue', () => 0.5), inputBinding('sValue', () => 0.87), inputBinding('vValue', () => 0.72)],
        });

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
