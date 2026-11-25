import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Toolbar } from './toolbar';
import { RouterModule } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { beforeEach, describe, expect, it } from 'vitest';

describe('Toolbar', () => {
    let component: Toolbar;
    let fixture: ComponentFixture<Toolbar>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Toolbar, RouterModule.forRoot([])],
            providers: [provideTranslateService({}), provideMockStore()],
        }).compileComponents();

        fixture = TestBed.createComponent(Toolbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
