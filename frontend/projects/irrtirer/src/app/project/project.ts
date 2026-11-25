import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-project',
    imports: [TranslatePipe],
    templateUrl: './project.html',
    host: { class: 'flex h-full items-center justify-center bg-surface' },
})
export class Project {}
