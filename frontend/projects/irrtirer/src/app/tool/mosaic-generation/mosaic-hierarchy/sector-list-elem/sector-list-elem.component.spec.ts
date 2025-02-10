import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorListElemComponent } from './sector-list-elem.component';
import { ComponentRef } from '@angular/core';

describe('SectorListElemComponent', () => {
    let component: SectorListElemComponent;
    let componentRef: ComponentRef<SectorListElemComponent>;
    let fixture: ComponentFixture<SectorListElemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorListElemComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorListElemComponent);
        component = fixture.componentInstance;
        componentRef = fixture.componentRef;
        componentRef.setInput('sectorSignal', { schema: { name: 'STH' } });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
