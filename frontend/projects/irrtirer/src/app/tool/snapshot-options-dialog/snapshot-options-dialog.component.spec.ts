import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnapshotOptionsDialogComponent } from './snapshot-options-dialog.component';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { provideTranslateService } from '@ngx-translate/core';
import { MatDialogRef } from '@angular/material/dialog';

describe('SnapshotOptionsDialogComponent', () => {
    let component: SnapshotOptionsDialogComponent;
    let fixture: ComponentFixture<SnapshotOptionsDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SnapshotOptionsDialogComponent],
            providers: [provideTranslateService({}), { provide: MatDialogRef, useValue: { close: vi.fn() } }],
        }).compileComponents();

        fixture = TestBed.createComponent(SnapshotOptionsDialogComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
