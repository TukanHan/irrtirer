import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, input, TemplateRef } from '@angular/core';

export interface StateMatrixSection {
    name: string;
}

export interface StateMatrixCellContext<TSection extends StateMatrixSection> {
    $implicit: TSection;
    state: string;
}

/**
 * Lays out a component in every state: one titled section per persistent state or variant,
 * one cell per interaction state. Each cell gets the class `state-<state>`, targeted by `pseudoStates()`.
 */
@Component({
    selector: 'sb-state-matrix',
    imports: [NgTemplateOutlet],
    template: `
        @for (section of sections(); track section.name) {
            <section>
                <h3 class="title">{{ section.name }}</h3>
                <div class="cells" [class]="'cells--' + layout()">
                    @for (state of states(); track state) {
                        <div [class]="'state-' + state">
                            <ng-container *ngTemplateOutlet="cell(); context: { $implicit: section, state }" />
                        </div>
                    }
                </div>
            </section>
        }
    `,
    styles: `
        :host {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .title {
            margin-bottom: 0.75rem;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            opacity: 0.6;
        }

        .cells--grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
            gap: 1rem;
        }

        .cells--flow {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem 1.5rem;
        }
    `,
})
export class StateMatrix<TSection extends StateMatrixSection> {
    public readonly sections = input.required<readonly TSection[]>();

    public readonly states = input.required<readonly string[]>();

    /** `grid` stretches cells to equal columns (fields), `flow` keeps their natural width (buttons). */
    public readonly layout = input<'grid' | 'flow'>('grid');

    protected readonly cell = contentChild.required<TemplateRef<StateMatrixCellContext<TSection>>>(TemplateRef);
}
