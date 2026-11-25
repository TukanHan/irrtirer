import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExtendedPanel } from './extended-panel';
import { inputBinding } from '@angular/core';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ExtendedPanel', () => {
    let component: ExtendedPanel;
    let fixture: ComponentFixture<ExtendedPanel>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExtendedPanel],
        }).compileComponents();

        fixture = TestBed.createComponent(ExtendedPanel, {
            bindings: [inputBinding('label', () => 'section')],
        });

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
