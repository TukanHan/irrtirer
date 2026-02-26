import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SentenceToWordPipe } from '../core/pipes/sentence-to-word.pipe';

@Component({
    selector: 'app-author',
    imports: [TranslateModule, SentenceToWordPipe],
    templateUrl: './author.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'flex h-full items-center justify-center bg-surface' },
})
export class AuthorComponent {
    protected readonly translate = inject(TranslateService);
}
