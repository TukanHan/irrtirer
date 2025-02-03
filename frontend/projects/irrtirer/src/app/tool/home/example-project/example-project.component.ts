import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ExampleProject } from './example-project.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-example-project',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './example-project.component.html',
    styleUrl: './example-project.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProjectComponent {
  @Input()
  project: ExampleProject;
}
