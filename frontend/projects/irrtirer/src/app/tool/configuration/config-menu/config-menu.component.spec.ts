import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigMenuComponent } from './config-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { ConfigurationService } from '../configuration.service';

describe('ConfigMenuComponent', () => {
    let component: ConfigMenuComponent;
    let fixture: ComponentFixture<ConfigMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConfigMenuComponent, TranslateModule.forRoot({})],
            providers: [provideMockStore(), ConfigurationService],
        }).compileComponents();

        fixture = TestBed.createComponent(ConfigMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
