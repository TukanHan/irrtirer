import { EnvironmentProviders, inject, provideAppInitializer } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const iconDictionary: Record<string, string> = {
    github: 'github-mark.svg',
    pl: 'pl.svg',
    gb: 'gb.svg',
};

export function provideSvgIcons(): EnvironmentProviders {
    return provideAppInitializer(() => {
        const iconRegistry = inject(MatIconRegistry);
        const sanitizer = inject(DomSanitizer);
        for (const [name, file] of Object.entries(iconDictionary)) {
            iconRegistry.addSvgIcon(name, sanitizer.bypassSecurityTrustResourceUrl(`../irrtirer/assets/icons/${file}`));
        }
    });
}
