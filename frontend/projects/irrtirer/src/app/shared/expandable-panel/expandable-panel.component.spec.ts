import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpandablePanelComponent } from './expandable-panel.component';
import { inputBinding } from '@angular/core';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ExpandablePanelComponent', () => {
    let component: ExpandablePanelComponent;
    let fixture: ComponentFixture<ExpandablePanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExpandablePanelComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ExpandablePanelComponent, {
            bindings: [inputBinding('isOpen', () => true)],
        });

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
