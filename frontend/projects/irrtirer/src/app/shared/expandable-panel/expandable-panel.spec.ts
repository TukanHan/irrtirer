import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpandablePanel } from './expandable-panel';
import { inputBinding } from '@angular/core';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ExpandablePanel', () => {
    let component: ExpandablePanel;
    let fixture: ComponentFixture<ExpandablePanel>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExpandablePanel],
        }).compileComponents();

        fixture = TestBed.createComponent(ExpandablePanel, {
            bindings: [inputBinding('isOpen', () => true)],
        });

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
