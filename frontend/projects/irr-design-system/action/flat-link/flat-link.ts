import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * Link that looks like `ids-flat-button`: borderless, its surface shows only on hover, focus and press.
 * Renders a native `<a>`.
 */
@Component({
    selector: 'ids-flat-link',
    imports: [NgTemplateOutlet, RouterLink, RouterLinkActive],
    template: `
        <ng-template #linkContent>
            <span class="ids-flat-action-content ids-button-label">
                <ng-content />
            </span>
        </ng-template>

        @if (linkType() === 'external') {
            <a class="ids-flat-action ids-flat-link" [href]="link()" target="_blank" rel="noopener noreferrer">
                <ng-container [ngTemplateOutlet]="linkContent" />
            </a>
        } @else {
            <a class="ids-flat-action ids-flat-link" [routerLink]="link()" routerLinkActive ariaCurrentWhenActive="page">
                <ng-container [ngTemplateOutlet]="linkContent" />
            </a>
        }
    `,
    styleUrls: ['./flat-link.css', '../../styles/shared/ids-flat-action.css', '../../styles/shared/ids-action.css'],
})
export class IdsFlatLink {
    /** Router path for an `internal` link, full URL for an `external` one. */
    public readonly link = input.required<string>();

    /** `internal` navigates with the Angular router and marks the current page with `aria-current`; `external` opens the URL in a new tab. */
    public readonly linkType = input<'internal' | 'external'>('internal');
}
