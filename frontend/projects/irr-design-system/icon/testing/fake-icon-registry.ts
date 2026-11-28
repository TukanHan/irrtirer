import { DOCUMENT, inject, Injectable, Provider } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IdsIconRegistry } from 'irr-design-system/icon';

/** Test double of `IdsIconRegistry`: returns an empty `<svg>` for any name, without HTTP requests. */
@Injectable()
export class IdsFakeIconRegistry implements Pick<IdsIconRegistry, 'register' | 'getSvg'> {
    private readonly document = inject(DOCUMENT);

    public register(): void {}

    public getSvg(): Observable<SVGElement> {
        return of(this.document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
    }
}

/** Replaces `IdsIconRegistry` with `IdsFakeIconRegistry` in consumers' tests. */
export function provideIdsFakeIconRegistry(): Provider {
    return { provide: IdsIconRegistry, useClass: IdsFakeIconRegistry };
}
