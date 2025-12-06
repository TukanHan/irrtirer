import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExtendedPanelComponent } from './extended-panel.component';
import { ComponentRef } from '@angular/core';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ExtendedPanelComponent', () => {
    let component: ExtendedPanelComponent;
    let componentRef: ComponentRef<ExtendedPanelComponent>;
    let fixture: ComponentFixture<ExtendedPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExtendedPanelComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ExtendedPanelComponent);
        component = fixture.componentInstance;
        componentRef = fixture.componentRef;
        componentRef.setInput('label', 'section');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
