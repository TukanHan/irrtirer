import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-project',
    imports: [TranslatePipe],
    templateUrl: './project.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'flex h-full items-center justify-center bg-surface' },
})
export class ProjectComponent {}
