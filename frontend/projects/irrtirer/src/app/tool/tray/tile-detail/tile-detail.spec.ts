import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { TileDetail } from './tile-detail';

describe('TileDetail', () => {
    let component: TileDetail;
    let fixture: ComponentFixture<TileDetail>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TileDetail, RouterModule.forRoot([])],
            providers: [provideMockStore(), provideTranslateService({})],
        }).compileComponents();

        fixture = TestBed.createComponent(TileDetail);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
