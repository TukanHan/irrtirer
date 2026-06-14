import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorContourEditionComponent } from './sector-contour-edition.component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { faceSector } from '../../../../test-data/sector.data';
import { ActivatedRoute } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';

describe('SectorContourEditionComponent', () => {
    let component: SectorContourEditionComponent;
    let fixture: ComponentFixture<SectorContourEditionComponent>;

    const initialState = {
        mosaicProject: { sectors: [faceSector] },
    };

    const mockActivatedRoute = {
        snapshot: {
            paramMap: {
                get: (key: string) => (key === 'id' ? faceSector.id : null),
            },
        },
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorContourEditionComponent],
            providers: [
                provideMockStore({ initialState }),
                provideTranslateService({}),
                { provide: ActivatedRoute, useValue: mockActivatedRoute }
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorContourEditionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
