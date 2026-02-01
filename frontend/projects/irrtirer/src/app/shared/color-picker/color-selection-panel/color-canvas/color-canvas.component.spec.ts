import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorCanvasComponent } from './color-canvas.component';
import { beforeEach, describe, expect, it } from 'vitest';
import { inputBinding } from '@angular/core';

describe('ColorCanvasComponent', () => {
    let component: ColorCanvasComponent;
    let fixture: ComponentFixture<ColorCanvasComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorCanvasComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ColorCanvasComponent, {
            bindings: [
                inputBinding('hValue', () => 0.5),
                inputBinding('sValue', () => 0.87),
                inputBinding('vValue', () => 0.72),
            ],
        });

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
