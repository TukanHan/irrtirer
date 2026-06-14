import {  Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { SentenceToWordPipe } from '../core/pipes/sentence-to-word.pipe';

@Component({
    selector: 'app-author',
    imports: [TranslatePipe, SentenceToWordPipe],
    templateUrl: './author.component.html',
    host: { class: 'flex h-full items-center justify-center bg-surface' },
})
export class AuthorComponent {
    protected readonly translate = inject(TranslateService);
}
