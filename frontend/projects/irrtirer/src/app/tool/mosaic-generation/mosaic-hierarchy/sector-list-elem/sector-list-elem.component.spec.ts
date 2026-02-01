import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorListElemComponent } from './sector-list-elem.component';
import { GeneratedSectorModel } from '../../mosaic-generation.interface';
import { faceSector } from '../../../../../test-data/sector.data';
import { TranslateModule } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { inputBinding } from '@angular/core';

describe('SectorListElemComponent', () => {
    let component: SectorListElemComponent;
    let fixture: ComponentFixture<SectorListElemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectorListElemComponent, TranslateModule.forRoot({})],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorListElemComponent, {
            bindings: [inputBinding('sector', () =>new GeneratedSectorModel(faceSector))],
        });

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
