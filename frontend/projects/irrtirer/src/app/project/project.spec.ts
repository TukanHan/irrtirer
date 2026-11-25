import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Project } from './project';
import { provideTranslateService } from '@ngx-translate/core';
import { describe, beforeEach, it, expect } from 'vitest';

describe('Project', () => {
    let component: Project;
    let fixture: ComponentFixture<Project>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Project],
            providers: [provideTranslateService({})],
        }).compileComponents();

        fixture = TestBed.createComponent(Project);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
