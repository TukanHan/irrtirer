import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MosaicProjectModel } from '../../../core/models/mosaic-project.model';
import { DialogData } from '../../../shared/dialog/dialog-data.interface';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectIsProjectCreated } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-new-project',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './new-project.component.html',
    styleUrl: './new-project.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProjectComponent {
    @Output()
    projectSelected = new EventEmitter<MosaicProjectModel>();

    constructor(private store: Store, private dialog: MatDialog) {}

    selectImage($event: Event): void {
        const target = $event.target as HTMLInputElement;
        const file = target.files?.item(0);

        if (file) {
            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = (readingEvent: ProgressEvent<FileReader>) => {
                const image: string = readingEvent?.target?.result as string;
                const project: MosaicProjectModel = {
                    config: {
                        base64Image: image,
                        mosaicWidth: 100,
                    },
                    tilesSets: [],
                    sectors: []
                };

                this.pushSelectedProject(project);
            };
        }
    }

    pushSelectedProject(project: MosaicProjectModel): void {
        this.projectSelected.next(project);
    }

    checkIfProjectAlreadyExistAndShowWarningOrUpload(
        fileUploader: HTMLInputElement
    ): void {
        if (this.store.selectSignal(selectIsProjectCreated)()) {
            this.showProjectAlreadyExistWarning().subscribe((result) => {
                if (result) {
                    fileUploader.click();
                }
            });
        } else {
            fileUploader.click();
        }
    }

    showProjectAlreadyExistWarning(): Observable<boolean> {
        const dialogData: DialogData = {
            title: 'Projekt już istnieje',
            message: 'Czy na pewno chcesz zastąpić obecny projekt? Jeśli nie zapiszesz obecnego projektu i stworzysz kolejny, nie będzie można go odzyskać.',
        };

        return this.dialog
            .open(DialogComponent, { data: dialogData })
            .afterClosed();
    }
}
