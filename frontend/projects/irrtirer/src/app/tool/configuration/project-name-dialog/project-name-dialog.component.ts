import { Component, inject, signal } from '@angular/core';
import { form, FormField, pattern, required } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { IdsIconButton } from 'irr-design-system';

export interface ProjectNameDialogData {
    defaultName: string;
}

interface FileNameFormData {
    name: string;
}

@Component({
    selector: 'app-project-name-dialog',
    imports: [MatFormFieldModule, MatInputModule, MatDialogModule, TranslatePipe, FormField, IdsIconButton],
    templateUrl: './project-name-dialog.component.html',
})
export class ProjectNameDialogComponent {
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
