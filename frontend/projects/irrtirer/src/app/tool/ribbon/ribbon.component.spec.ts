import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RibbonComponent } from './ribbon.component';
import { beforeEach, describe, expect, it } from 'vitest';
import { TranslateModule } from '@ngx-translate/core';
import { inputBinding } from '@angular/core';

describe('RibbonComponent', () => {
    let component: RibbonComponent;
    let fixture: ComponentFixture<RibbonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RibbonComponent, TranslateModule.forRoot({})],
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
