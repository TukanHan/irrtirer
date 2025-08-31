import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorCanvasComponent } from './color-canvas.component';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ColorCanvasComponent', () => {
    let component: ColorCanvasComponent;
    let fixture: ComponentFixture<ColorCanvasComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorCanvasComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ColorCanvasComponent);
        fixture.componentRef.setInput('hValue', 0.5);
        fixture.componentRef.setInput('sValue', 0.87);
        fixture.componentRef.setInput('vValue', 0.72);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
