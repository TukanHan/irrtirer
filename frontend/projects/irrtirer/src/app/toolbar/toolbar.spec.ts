import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { Toolbar } from './toolbar';

describe('Toolbar', () => {
    let component: Toolbar;
    let fixture: ComponentFixture<Toolbar>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Toolbar],
            providers: [provideRouter([]), provideTranslateService({}), provideMockStore()],
        }).compileComponents();

        fixture = TestBed.createComponent(Toolbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
