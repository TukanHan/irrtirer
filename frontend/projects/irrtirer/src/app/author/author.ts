import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { SentenceToWordPipe } from '../core/pipes/sentence-to-word.pipe';

@Component({
    selector: 'app-author',
    imports: [TranslatePipe, SentenceToWordPipe],
    template: `
        <div class="flex gap-2.5 items-baseline heading-hero">
            @let words = this.translate.instant('aboutAuthor.itWas') | sentenceToWord;
            @for (word of words; track $index) {
                <span class="word-fade-in" [class.normal]="true" [style.animationDelay]="$index * 0.75 + 's'"> {{ word }} </span>
            }
            <span class="word-fade-in heading-hero-accent" [style.animationDelay]="words.length * 0.75 + 1 + 's'">
                {{ 'aboutAuthor.me' | translate }}
            </span>
        </div>
    `,
    host: { class: 'flex h-full items-center justify-center bg-surface' },
})
export class Author {
    protected readonly translate = inject(TranslateService);
}
