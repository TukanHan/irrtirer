import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SentenceToWordPipe } from '../core/pipes/sentence-to-word.pipe';

@Component({
    selector: 'app-author',
    imports: [TranslateModule, SentenceToWordPipe],
    templateUrl: './author.component.html',
    styleUrl: './author.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorComponent {
    protected readonly translate = inject(TranslateService);
}
