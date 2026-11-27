import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ActiveCanvas } from './active-canvas';

describe('ActiveCanvas', () => {
    let component: ActiveCanvas;
    let fixture: ComponentFixture<ActiveCanvas>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ActiveCanvas],
        }).compileComponents();

        fixture = TestBed.createComponent(ActiveCanvas);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
