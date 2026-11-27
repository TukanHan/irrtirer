import { Component, inject, signal } from '@angular/core';
import { form, FormField, pattern, required } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatError, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { IdsFlatButton } from 'irr-design-system/action';

export interface ProjectNameDialogData {
    defaultName: string;
}

interface FileNameFormData {
    name: string;
}

@Component({
    selector: 'app-project-name-dialog',
    imports: [MatFormField, MatError, MatInput, MatDialogTitle, MatDialogActions, TranslatePipe, FormField, IdsFlatButton],
    template: `
        <h2 mat-dialog-title>{{ 'tool.config.menu.chooseFileName' | translate }}</h2>

        <div class="mx-6 my-1.5 flex w-[300px]">
            <mat-form-field class="density-3 w-full" subscriptSizing="dynamic">
                <input matInput [formField]="form.name" />
                <mat-error>{{ 'tool.config.menu.enterValidName' | translate }}</mat-error>
            </mat-form-field>
        </div>
        <div mat-dialog-actions align="end">
            <ids-flat-button (clicked)="cancel()"> {{ 'common.cancel' | translate }} </ids-flat-button>
            <ids-flat-button (clicked)="confirm()" [disabled]="!form().valid()"> {{ 'common.save' | translate }} </ids-flat-button>
        </div>
    `,
})
export class ProjectNameDialog {
    protected readonly data = inject<{ defaultName: string }>(MAT_DIALOG_DATA);

    private readonly dialogRef = inject(MatDialogRef);

    private readonly value = signal<FileNameFormData>({
        name: this.data.defaultName,
    });

    protected readonly form = form(this.value, (schemaPath) => {
        required(schemaPath.name);
        pattern(schemaPath.name, /^(?!(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.[^.]*)?$)[^<>:"/\\|?*\x00-\x1F]+$/i);
    });

    protected cancel(): void {
        this.dialogRef.close();
    }

    protected confirm(): void {
        this.dialogRef.close(this.form.name().value());
    }
}
