import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExtendedPanelComponent } from './extended-panel.component';
import { inputBinding } from '@angular/core';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ExtendedPanelComponent', () => {
    let component: ExtendedPanelComponent;
    let fixture: ComponentFixture<ExtendedPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExtendedPanelComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ExtendedPanelComponent, {
            bindings: [inputBinding('label', () => 'section')],
        });
        
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
