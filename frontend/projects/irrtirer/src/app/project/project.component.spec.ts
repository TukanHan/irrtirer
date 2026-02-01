import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectComponent } from './project.component';
import { TranslateModule } from '@ngx-translate/core';
import { describe, beforeEach, it, expect } from 'vitest';

describe('ProjectComponent', () => {
    let component: ProjectComponent;
    let fixture: ComponentFixture<ProjectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProjectComponent, TranslateModule.forRoot({})],
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
