import { Component, inject } from '@angular/core';
import { IdsFlatButton } from 'irr-design-system/action';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from './dialog-data.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-dialog',
    imports: [MatDialogModule, IdsFlatButton],
    templateUrl: './dialog.html',
    styleUrl: './dialog.scss',
})
export class Dialog {
    protected readonly translate = inject<TranslateService>(TranslateService);

    protected readonly data = inject<DialogData>(MAT_DIALOG_DATA);

    private readonly dialogRef = inject<MatDialogRef<Dialog, boolean>>(MatDialogRef);

    protected readonly noLabel: string = this.data.noCustomLabel ?? this.translate.instant('common.no');

    protected readonly yesLabel: string = this.data.yesCustomLabel ?? this.translate.instant('common.yes');

    protected cancel(): void {
        this.dialogRef.close();
    }

    protected confirm(): void {
        this.dialogRef.close(true);
    }
}
