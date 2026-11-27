import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-project',
    imports: [TranslatePipe],
    template: `<div class="heading-hero">{{ 'aboutProject.content' | translate }}</div>`,
    host: { class: 'flex h-full items-center justify-center bg-surface' },
})
export class Project {}
