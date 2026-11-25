import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorListElem } from './sector-list-elem';
import { GeneratedSectorModel } from '../../mosaic-generation.interface';
import { faceSector } from '../../../../../test-data/sector.data';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { inputBinding } from '@angular/core';

describe('SectorListElem', () => {
    let component: SectorListElem;
    let fixture: ComponentFixture<SectorListElem>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorListElem],
            providers: [provideTranslateService({})],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorListElem, {
            bindings: [inputBinding('sector', () => new GeneratedSectorModel(faceSector))],
        });

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
