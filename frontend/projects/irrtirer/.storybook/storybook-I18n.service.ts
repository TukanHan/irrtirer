import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class StorybookI18nService {
    private readonly translate = inject(TranslateService);

    constructor() {
        window.addEventListener('language-changed', (event: Event) => {
            const lang = (event as CustomEvent<{ lang: string }>).detail.lang;
            this.translate.use(lang);
        });
    }
}
