import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnapshotOptionsDialogComponent } from './snapshot-options-dialog.component';
import { beforeEach, describe, expect, it } from 'vitest';
import { TranslateModule } from '@ngx-translate/core';

describe('SnapshotOptionsDialogComponent', () => {
    let component: SnapshotOptionsDialogComponent;
    let fixture: ComponentFixture<SnapshotOptionsDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SnapshotOptionsDialogComponent, TranslateModule.forRoot({})],
        }).compileComponents();

        fixture = TestBed.createComponent(SnapshotOptionsDialogComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
