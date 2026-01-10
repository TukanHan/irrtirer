import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RibbonComponent } from './ribbon.component';
import { beforeEach, describe, expect, it } from 'vitest';
import { TranslateModule } from '@ngx-translate/core';

describe('RibbonComponent', () => {
    let component: RibbonComponent;
    let fixture: ComponentFixture<RibbonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RibbonComponent, TranslateModule.forRoot({})],
        }).compileComponents();

        fixture = TestBed.createComponent(RibbonComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('viewportSize', { with: 2.32, height: 1.23 });
        fixture.componentRef.setInput('actions', []);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
