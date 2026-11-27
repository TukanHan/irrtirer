import { inputBinding } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { ProgressInfo } from './progress-info';

describe('ProgressInfo', () => {
    let component: ProgressInfo;
    let fixture: ComponentFixture<ProgressInfo>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProgressInfo],
        }).compileComponents();

        fixture = TestBed.createComponent(ProgressInfo, {
            bindings: [inputBinding('infoState', () => ({ type: 'progress', sector: 'Twarz', percent: 20 }))],
        });
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
