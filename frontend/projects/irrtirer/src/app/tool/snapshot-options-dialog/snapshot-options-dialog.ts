import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SnapshotOptions } from './snapshot-options.interface';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IdsFlatButton } from 'irr-design-system/action';

@Component({
    selector: 'app-snapshot-options-dialog',
    imports: [MatDialogModule, IdsFlatButton, MatSliderModule, MatCheckboxModule, FormField, TranslatePipe],
    templateUrl: './snapshot-options-dialog.html',
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
