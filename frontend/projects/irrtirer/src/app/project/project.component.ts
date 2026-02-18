import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-project',
    imports: [TranslateModule],
    templateUrl: './project.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'flex h-full items-center justify-center bg-surface' },
})
export class ProjectComponent {}
