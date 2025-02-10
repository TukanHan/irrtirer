import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressInfoComponent } from './progress-info.component';
import { ComponentRef } from '@angular/core';

describe('ProgressInfoComponent', () => {
    let component: ProgressInfoComponent;
    let componentRef: ComponentRef<ProgressInfoComponent>;
    let fixture: ComponentFixture<ProgressInfoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProgressInfoComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ProgressInfoComponent);
        component = fixture.componentInstance;
        componentRef = fixture.componentRef;
        componentRef.setInput('infoState', { type: 'progress', sector: 'Twarz', percent: 20 });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
