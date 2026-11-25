import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnapshotOptionsDialog } from './snapshot-options-dialog';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { provideTranslateService } from '@ngx-translate/core';
import { MatDialogRef } from '@angular/material/dialog';

describe('SnapshotOptionsDialog', () => {
    let component: SnapshotOptionsDialog;
    let fixture: ComponentFixture<SnapshotOptionsDialog>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SnapshotOptionsDialog],
            providers: [provideTranslateService({}), { provide: MatDialogRef, useValue: { close: vi.fn() } }],
        }).compileComponents();

        fixture = TestBed.createComponent(SnapshotOptionsDialog);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
