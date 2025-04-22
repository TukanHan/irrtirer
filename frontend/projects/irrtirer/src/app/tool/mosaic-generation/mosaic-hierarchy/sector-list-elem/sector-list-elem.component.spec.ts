import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorListElemComponent } from './sector-list-elem.component';
import { GeneratedSectorModel } from '../../mosaic-generation.interface';
import { faceSector } from '../../../../../test-data/sector.data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

describe('SectorListElemComponent', () => {
    let component: SectorListElemComponent;
    let fixture: ComponentFixture<SectorListElemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                SectorListElemComponent,
                BrowserAnimationsModule,
                TranslateModule.forRoot({})
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(SectorListElemComponent);
        fixture.componentRef.setInput('sector', new GeneratedSectorModel(faceSector));
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
