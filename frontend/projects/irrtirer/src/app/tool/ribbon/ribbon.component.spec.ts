import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RibbonComponent } from './ribbon.component';
import { beforeEach, describe, expect, it } from 'vitest';
import { provideTranslateService } from '@ngx-translate/core';
import { inputBinding } from '@angular/core';

describe('RibbonComponent', () => {
    let component: RibbonComponent;
    let fixture: ComponentFixture<RibbonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RibbonComponent],
            providers: [provideTranslateService({})],
        }).compileComponents();

        fixture = TestBed.createComponent(RibbonComponent, {
            bindings: [
                inputBinding('viewportSize', () => ({ with: 2.32, height: 1.23 })),
                inputBinding('actions', () => []),
            ],
        });
        
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
