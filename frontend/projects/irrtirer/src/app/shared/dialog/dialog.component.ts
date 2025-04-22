import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DialogData } from './dialog-data.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-dialog',
    imports: [MatDialogModule, MatButtonModule],
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
    protected readonly translate = inject<TranslateService>(TranslateService);

    protected readonly data = inject<DialogData>(MAT_DIALOG_DATA);

    protected noLabel: string = this.data.noCustomLabel ?? this.translate.instant('common.no');

    protected yesLabel: string = this.data.yesCustomLabel ?? this.translate.instant('common.yes');
}
