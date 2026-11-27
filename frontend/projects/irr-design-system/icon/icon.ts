import { Component, effect, ElementRef, ErrorHandler, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { IdsIconRegistry } from './registry/icon-registry';

/**
 * Decorative icon: a ligature from the Material Symbols Outlined font, which the app must load, or an SVG registered in `IdsIconRegistry`.
 * Hidden from assistive technology: the surrounding control provides the accessible name.
 */
@Component({
    selector: 'ids-icon',
    template: `{{ svg() ? '' : name() }}`,
    styleUrl: './icon.css',
    host: { 'aria-hidden': 'true' },
})
export class IdsIcon {
    /** Icon name from [Material Symbols](https://fonts.google.com/icons), e.g. `home`, `more_vert`. */
    public readonly name = input('');

    /** Name of an SVG icon registered in `IdsIconRegistry`. Takes precedence over `name`. */
    public readonly svg = input<string>();

    private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly registry = inject(IdsIconRegistry);
    private readonly errorHandler = inject(ErrorHandler);

    private readonly svgElement = rxResource({
        params: () => this.svg() || undefined,
        stream: ({ params }) => this.registry.getSvg(params),
    });

    constructor() {
        this.insertLoadedSvg();
        this.reportSvgErrors();
    }

    private insertLoadedSvg(): void {
        effect((onCleanup) => {
            if (!this.svgElement.hasValue()) {
                return;
            }

            const element = this.svgElement.value();
            fitToHost(element);
            this.host.nativeElement.appendChild(element);
            onCleanup(() => element.remove());
        });
    }

    private reportSvgErrors(): void {
        effect(() => {
            const error = this.svgElement.error();
            if (error) {
                this.errorHandler.handleError(error);
            }
        });
    }
}

/** Sizes an inlined SVG to fill the host, which takes its size from `--ids-icon-size`. */
function fitToHost(element: SVGElement): void {
    element.setAttribute('width', '100%');
    element.setAttribute('height', '100%');
    element.style.display = 'block';
}
