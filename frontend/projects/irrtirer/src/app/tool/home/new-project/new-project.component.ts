import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MosaicProject } from '../../../core/models/mosaic-project.model';

@Component({
    selector: 'app-new-project',
    standalone: true,
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './new-project.component.html',
    styleUrl: './new-project.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewProjectComponent {
    @Output()
    projectSelected = new EventEmitter<MosaicProject>();

    selectImage($event: Event): void {
        const target = $event.target as HTMLInputElement;
        const file = target.files?.item(0);

        if (file) {
            var reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = (readingEvent: ProgressEvent<FileReader>) => {
                const image: string = readingEvent?.target?.result as string;
                const project: MosaicProject = {
                    config: {
                        base64Image: image,
                        mosaicWidth: 100,
                    },
                };

                this.pushSelectedProject(project);
            };
        }
    }

    selectProjectFile($event: Event): void {}

    pushSelectedProject(project: MosaicProject): void {
        this.projectSelected.next(project);
    }
}
