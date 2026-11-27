import { inject, Service } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Service({ autoProvided: false })
export class StorybookLanguageSync {
    private readonly translate = inject(TranslateService);

    constructor() {
        window.addEventListener('language-changed', (event: Event) => {
            const lang = (event as CustomEvent<{ lang: string }>).detail.lang;
            this.translate.use(lang);
        });
    }
}
