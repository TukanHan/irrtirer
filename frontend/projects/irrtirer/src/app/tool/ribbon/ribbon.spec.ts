import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ribbon } from './ribbon';
import { beforeEach, describe, expect, it } from 'vitest';
import { provideTranslateService } from '@ngx-translate/core';
import { inputBinding } from '@angular/core';

describe('Ribbon', () => {
    let component: Ribbon;
    let fixture: ComponentFixture<Ribbon>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Ribbon],
            providers: [provideTranslateService({})],
        }).compileComponents();

        fixture = TestBed.createComponent(Ribbon, {
            bindings: [inputBinding('viewportSize', () => ({ with: 2.32, height: 1.23 })), inputBinding('actions', () => [])],
        });

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
