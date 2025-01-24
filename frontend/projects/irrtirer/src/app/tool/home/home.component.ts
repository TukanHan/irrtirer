import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NewProjectComponent } from './new-project/new-project.component';
import { MosaicProjectModel } from '../../core/models/mosaic-project.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MosaicProjectActions } from '../../core/state/mosaic-project/mosaic-project.actions';
import { selectMosaicProject } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { CommonModule } from '@angular/common';
import { ProjectConfigComponent } from './project-config/project-config.component';
import { ExampleProject } from './example-project/example-project.interface';
import { ExampleProjectComponent } from './example-project/example-project.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        ProjectConfigComponent,
        NewProjectComponent,
        ExampleProjectComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    currentProject$: Observable<MosaicProjectModel> =
        this.store.select(selectMosaicProject);

    exampleProjects: ExampleProject[] = [
        { name: 'Mona Lisa', image: 'asdasd' },
        { name: 'Imperator ludzkości', image: 'asdasd' },
        { name: 'Portret', image: 'asdasd' },
    ];

    constructor(private store: Store) {}

    createNewProject(project: MosaicProjectModel): void {
        this.store.dispatch(MosaicProjectActions.projectCreated({ project }));
    }
}
