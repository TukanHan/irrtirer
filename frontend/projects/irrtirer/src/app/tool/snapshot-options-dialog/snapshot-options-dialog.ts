import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IdsFlatButton } from 'irr-design-system/action';
import { SnapshotOptions } from './snapshot-options.interface';

@Component({
    selector: 'app-snapshot-options-dialog',
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, IdsFlatButton, MatSlider, MatSliderThumb, MatCheckbox, FormField, TranslatePipe],
    template: `
        <div class="dialog-content">
            <h1 mat-dialog-title>{{ 'tool.snapshotDialog.title' | translate }}</h1>
            <div mat-dialog-content>
                <span>{{ 'tool.snapshotDialog.transparentBackgroundLabel' | translate }}</span>
                <mat-checkbox color="accent" [formField]="form.transparentBackground" />
                <span>{{ 'tool.snapshotDialog.scaleFactorLabel' | translate }}</span>
                <mat-slider color="accent" class="example-margin" [max]="4" [min]="1" [step]="1" [discrete]="true" [showTickMarks]="true">
                    <input matSliderThumb [formField]="form.scaleFactor" />
                </mat-slider>
            </div>
            <div mat-dialog-actions align="end">
                <ids-flat-button (clicked)="cancel()">{{ 'common.cancel' | translate }}</ids-flat-button>
                <ids-flat-button (clicked)="confirm()">{{ 'common.save' | translate }}</ids-flat-button>
            </div>
        </div>
    `,
    styleUrl: './snapshot-options-dialog.scss',
})
export class SnapshotOptionsDialog {
    protected readonly translate = inject<TranslateService>(TranslateService);

    private readonly dialogRef = inject(MatDialogRef);

    protected readonly data = signal<SnapshotOptions>({
        scaleFactor: 2,
        transparentBackground: true,
    });

    protected readonly form = form<SnapshotOptions>(this.data);

    protected cancel(): void {
        this.dialogRef.close();
    }

    protected confirm(): void {
        this.dialogRef.close(this.data());
    }
}
