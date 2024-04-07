import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MosaicProject } from '../../../core/models/mosaic-project.model';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../../core/state/mosaic-project/mosaic-project.actions';

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
    project!: MosaicProject;

    constructor(private store: Store) {}

    deleteProject(): void {
        this.store.dispatch(MosaicProjectActions.projectCanceled());
    }
}
