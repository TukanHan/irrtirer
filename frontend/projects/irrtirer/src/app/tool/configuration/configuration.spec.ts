import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { activeCanvas } from '../../../test-data/active-canvas.data';
import { CanvasToolkit } from '../canvas-toolkit';
import { Configuration } from './configuration';

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
