import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MosaicProjectModel } from '../../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { DialogData } from '../../../shared/dialog/dialog-data.interface';

@Component({
    selector: 'app-project-config',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatInputModule, MatChipsModule],
    templateUrl: './project-config.component.html',
    styleUrl: './project-config.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectConfigComponent {
    @Input()
    project!: MosaicProjectModel;

    constructor(private store: Store, private dialog: MatDialog) {}

    widthChange($event: Event): void {
        const valueInput = $event.target as HTMLInputElement;
        const value = parseFloat(valueInput.value);
        this.store.dispatch(
            MosaicProjectActions.mosaicWidthChanged({ width: value })
        );
    }

    deleteProject(): void {
        const dialogData: DialogData = {
            title: 'Porzuć projekt',
            message: 'Czy na pewno chcesz porzucić projekt? Jeśli nie masz zapisanego pliku projektu, nie będzie można do niego wrócić.',
        };

        this.dialog
            .open(DialogComponent, { data: dialogData })
            .afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.store.dispatch(MosaicProjectActions.projectCanceled());
                }
            });
    }
}
