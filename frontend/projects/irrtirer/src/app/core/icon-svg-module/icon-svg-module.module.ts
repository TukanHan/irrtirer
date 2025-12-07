import { inject, NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const iconDictionary: Record<string, string> = {
    github: 'github-mark.svg',
    pl: 'pl.svg',
    gb: 'gb.svg',
};

@NgModule({
    imports: [CommonModule],
    providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class IconSvgModuleModule {
    private readonly baseHref = inject(APP_BASE_HREF);

    constructor(
        private readonly matIconRegistry: MatIconRegistry,
        private readonly domSanitizer: DomSanitizer,
    ) {
        const prefix = this.baseHref.replace(/^\//, '');

        for (const key in iconDictionary) {
            this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(`../${prefix}assets/icons/${iconDictionary[key]}`));
        }
    }
}
