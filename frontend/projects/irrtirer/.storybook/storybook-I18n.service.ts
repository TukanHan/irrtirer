import { Injectable, NgZone, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class StorybookI18nService {
    private readonly translate = inject(TranslateService);

    private readonly zone = inject(NgZone);

    constructor() {
        window.addEventListener('language-changed', (event: CustomEvent<{ lang: string }>) => {
            this.zone.run(() => {
                this.translate.use(event.detail.lang);
            });
        });
    }
}
