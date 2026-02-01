import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressInfoComponent } from './progress-info.component';
import { inputBinding } from '@angular/core';
import { describe, beforeEach, it, expect } from 'vitest';

describe('ProgressInfoComponent', () => {
    let component: ProgressInfoComponent;
    let fixture: ComponentFixture<ProgressInfoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProgressInfoComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ProgressInfoComponent, {
            bindings: [inputBinding('infoState', () => ({ type: 'progress', sector: 'Twarz', percent: 20 }))],
        });
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
