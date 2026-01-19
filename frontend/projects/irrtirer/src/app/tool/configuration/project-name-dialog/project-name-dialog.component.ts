import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Field, form, pattern, required } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

export interface ProjectNameDialogData {
    defaultName: string;
}

interface FileNameFormData {
    name: string;
}

@Component({
    selector: 'app-project-name-dialog',
    imports: [MatFormFieldModule, MatInputModule, MatDialogModule, MatButtonModule, TranslateModule, Field],
    styleUrl: './project-name-dialog.component.scss',
    templateUrl: './project-name-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectNameDialogComponent {
    protected readonly data = inject<{ defaultName: string }>(MAT_DIALOG_DATA);

    private readonly value = signal<FileNameFormData>({
        name: this.data.defaultName  
    });

    protected readonly form = form(this.value, (schemaPath) => {
        required(schemaPath.name);
        pattern(schemaPath.name, /^(?!(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.[^.]*)?$)[^<>:"/\\|?*\x00-\x1F]+$/i);
    });
}
