import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Dialog } from './dialog';

describe('Dialog', () => {
    let component: Dialog;
    let fixture: ComponentFixture<Dialog>;
    let closeDialog: ReturnType<typeof vi.fn>;

    beforeEach(async () => {
        closeDialog = vi.fn();

        await TestBed.configureTestingModule({
            imports: [Dialog],
            providers: [
                provideTranslateService({}),
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: { close: closeDialog } },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(Dialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should close without a result when declining', () => {
        const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
        buttons[0].click();

        expect(closeDialog).toHaveBeenCalledWith();
    });

    it('should close with true when confirming', () => {
        const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
        buttons[1].click();

        expect(closeDialog).toHaveBeenCalledWith(true);
    });
});
