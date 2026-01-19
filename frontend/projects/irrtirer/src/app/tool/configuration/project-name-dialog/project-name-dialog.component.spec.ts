import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectNameDialogComponent } from './project-name-dialog.component';
import { beforeEach, describe, expect, it } from 'vitest';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

describe('ProjectNameDialogComponent', () => {
    let component: ProjectNameDialogComponent;
    let fixture: ComponentFixture<ProjectNameDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProjectNameDialogComponent, TranslateModule.forRoot({})],
            providers: [{ provide: MAT_DIALOG_DATA, useValue: { defaultName: 'irr_project' } }],
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectNameDialogComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
