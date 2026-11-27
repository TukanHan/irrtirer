import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay, throwError } from 'rxjs';

/**
 * Names SVG files for the `svg` input of `ids-icon`. Each file is downloaded once and inlined, so it can use `currentColor`.
 * Register only trusted URLs: the SVG becomes part of the page.
 */
@Injectable({ providedIn: 'root' })
export class IdsIconRegistry {
    private readonly http = inject(HttpClient);
    private readonly urls = new Map<string, string>();
    private readonly sources = new Map<string, Observable<SVGElement>>();

    public register(name: string, url: string): void {
        this.urls.set(name, url);
        this.sources.delete(name);
    }

    /** Emits a copy of the parsed `<svg>` on every subscription, so each icon gets its own element. */
    public getSvg(name: string): Observable<SVGElement> {
        const source = this.getSource(name);
        if (!source) {
            return throwError(() => new Error(`IdsIconRegistry: no SVG icon registered as "${name}".`));
        }

        return source.pipe(map((svg) => svg.cloneNode(true) as SVGElement));
    }

    private getSource(name: string): Observable<SVGElement> | undefined {
        const url = this.urls.get(name);
        if (url === undefined) {
            return undefined;
        }

        let source = this.sources.get(name);
        if (!source) {
            source = this.http.get(url, { responseType: 'text' }).pipe(map(parseSvg), shareReplay(1));
            this.sources.set(name, source);
        }

        return source;
    }
}

function parseSvg(text: string): SVGElement {
    const root = new DOMParser().parseFromString(text, 'image/svg+xml').documentElement;
    if (!(root instanceof SVGElement)) {
        throw new Error('IdsIconRegistry: the file is not an SVG.');
    }

    return root;
}
