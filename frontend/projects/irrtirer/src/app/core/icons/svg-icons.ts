import { EnvironmentProviders, inject, provideAppInitializer } from '@angular/core';
import { IdsIconRegistry } from 'irr-design-system/icon';

const iconDictionary: Record<string, string> = {
    github: 'github-mark.svg',
    pl: 'pl.svg',
    gb: 'gb.svg',
};

export function provideSvgIcons(): EnvironmentProviders {
    return provideAppInitializer(() => {
        const iconRegistry = inject(IdsIconRegistry);
        for (const [name, file] of Object.entries(iconDictionary)) {
            iconRegistry.register(name, `../irrtirer/assets/icons/${file}`);
        }
    });
}
