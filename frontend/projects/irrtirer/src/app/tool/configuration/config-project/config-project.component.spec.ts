import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigProjectComponent } from './config-project.component';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigurationService } from '../configuration.service';

describe('ConfigProjectComponent', () => {
    let component: ConfigProjectComponent;
    let fixture: ComponentFixture<ConfigProjectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConfigProjectComponent, TranslateModule.forRoot({}), BrowserAnimationsModule],
            providers: [provideMockStore(), ConfigurationService],
        }).compileComponents();

        fixture = TestBed.createComponent(ConfigProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
