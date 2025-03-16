import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-project',
    imports: [TranslateModule],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {}
