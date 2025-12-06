import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpandablePanelComponent } from './expandable-panel.component';
import { ComponentRef } from '@angular/core';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ExpandablePanelComponent', () => {
    let component: ExpandablePanelComponent;
    let componentRef: ComponentRef<ExpandablePanelComponent>;
    let fixture: ComponentFixture<ExpandablePanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExpandablePanelComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ExpandablePanelComponent);
        component = fixture.componentInstance;
        componentRef = fixture.componentRef;
        componentRef.setInput('isOpen', true);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
