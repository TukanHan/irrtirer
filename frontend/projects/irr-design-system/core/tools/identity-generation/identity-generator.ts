import { Directive, inject, input } from '@angular/core';
import { IdentityCounter } from './identity-counter';

@Directive({
    selector: '[idsIdentityGenerator]',
})
export class IdentityGenerator {
    private readonly counterService = inject(IdentityCounter);

    protected readonly id = input<string | undefined>(undefined);

    public getIdentifier(fallback: (id: number) => string): string {
        const explicitId = this.id();
        if (explicitId) {
            return explicitId;
        }

        const generatedId = this.counterService.getNextIdNumber();
        return fallback(generatedId);
    }
}

export function injectControlId(fallback: (id: number) => string): string {
    const identityGenerator = inject(IdentityGenerator);
    return identityGenerator.getIdentifier(fallback);
}