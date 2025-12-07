import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { APP_BASE_HREF } from '@angular/common';

describe('ToolbarComponent', () => {
    let component: ToolbarComponent;
    let fixture: ComponentFixture<ToolbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ToolbarComponent, RouterModule.forRoot([]), TranslateModule.forRoot({})],
            providers: [provideMockStore(), { provide: APP_BASE_HREF, useValue: '/' }]
        }).compileComponents();

        fixture = TestBed.createComponent(ToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
