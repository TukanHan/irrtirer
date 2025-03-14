import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
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
    protected noLabel: string = this.data.noCustomLabel ?? this.translate.instant('common.no');
    protected yesLabel: string = this.data.yesCustomLabel ?? this.translate.instant('common.yes');

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private translate: TranslateService) {}
}
