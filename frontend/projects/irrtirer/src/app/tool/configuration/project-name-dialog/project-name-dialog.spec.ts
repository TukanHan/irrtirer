import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectNameDialog } from './project-name-dialog';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideTranslateService } from '@ngx-translate/core';

describe('ProjectNameDialog', () => {
    let component: ProjectNameDialog;
    let fixture: ComponentFixture<ProjectNameDialog>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProjectNameDialog],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: { defaultName: 'irr_project' } },
                { provide: MatDialogRef, useValue: { close: vi.fn() } },
                provideTranslateService({}),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectNameDialog);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
