import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DialogData } from './dialog-data.interface';

@Component({
    selector: 'app-dialog',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule],
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  noLabel: string = this.data.noCustomLabel ?? $localize `Nie`;
  yesLabel: string = this.data.yesCustomLabel ?? $localize `Tak`;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}
