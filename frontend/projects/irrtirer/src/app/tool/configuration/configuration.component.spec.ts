import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurationComponent } from './configuration.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { activeCanvas } from '../../../test-data/active-canvas.data';
import { beforeEach, describe, expect, it } from 'vitest';
import { ToolService } from '../tool.service';

describe('ConfigurationComponent', () => {
    let component: ConfigurationComponent;
    let fixture: ComponentFixture<ConfigurationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConfigurationComponent, TranslateModule.forRoot({})],
            providers: [provideMockStore(), { provide: ToolService, useValue: {} }],
        }).compileComponents();

        fixture = TestBed.createComponent(ConfigurationComponent);
        component = fixture.componentInstance;
        component.sectionEntered(activeCanvas, true);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
