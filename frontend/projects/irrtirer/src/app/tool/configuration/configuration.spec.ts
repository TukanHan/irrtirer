import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Configuration } from './configuration';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { activeCanvas } from '../../../test-data/active-canvas.data';
import { beforeEach, describe, expect, it } from 'vitest';
import { CanvasToolkit } from '../canvas-toolkit';

describe('Configuration', () => {
    let component: Configuration;
    let fixture: ComponentFixture<Configuration>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Configuration],
            providers: [provideMockStore(), provideTranslateService({}), { provide: CanvasToolkit, useValue: {} }],
        }).compileComponents();

        fixture = TestBed.createComponent(Configuration);
        component = fixture.componentInstance;
        component.sectionEntered(activeCanvas, true);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
