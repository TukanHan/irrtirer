import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurationComponent } from './configuration.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { activeCanvas } from '../../../test-data/active-canvas.data';

describe('ConfigurationComponent', () => {
    let component: ConfigurationComponent;
    let fixture: ComponentFixture<ConfigurationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConfigurationComponent, TranslateModule.forRoot({})],
            providers: [provideMockStore()],
        }).compileComponents();

        fixture = TestBed.createComponent(ConfigurationComponent);
        component = fixture.componentInstance;
        component.sectionEntered(activeCanvas);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
