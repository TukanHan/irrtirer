import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { form, Field } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SnapshotOptions } from './snapshot-options.interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-snapshot-options-dialog',
    imports: [MatDialogModule, MatButtonModule, MatSliderModule, MatCheckboxModule, Field, TranslateModule],
    templateUrl: './snapshot-options-dialog.component.html',
    styleUrl: './snapshot-options-dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnapshotOptionsDialogComponent {
    protected readonly translate = inject<TranslateService>(TranslateService);

    protected readonly data = signal<SnapshotOptions>({
        scaleFactor: 2,
        transparentBackground: true,
    });

    protected readonly form = form<SnapshotOptions>(this.data);
}
