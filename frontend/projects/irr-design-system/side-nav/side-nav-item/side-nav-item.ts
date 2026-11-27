import { booleanAttribute, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IdsTooltip } from 'irr-design-system/tooltip';
import { MatIcon } from '@angular/material/icon';

/**
 * Icon-only router link in an `ids-side-nav`. It is highlighted and marked with `aria-current` while its route is active.
 * Renders a native `<a>`.
 */
@Component({
    selector: 'ids-side-nav-item',
    imports: [RouterLink, RouterLinkActive, IdsTooltip, MatIcon],
    template: `
        <a
            class="ids-side-nav-item"
            [routerLink]="disabled() ? null : link()"
            routerLinkActive
            ariaCurrentWhenActive="page"
            [attr.aria-disabled]="disabled() ? 'true' : null"
            [attr.aria-label]="label() || null"
            [attr.tabindex]="disabled() ? -1 : null"
            [idsTooltip]="label()"
            idsTooltipPosition="right"
        >
            <mat-icon class="ids-side-nav-item-icon material-symbols-outlined">{{ icon() }}</mat-icon>
        </a>
    `,
    styleUrl: './side-nav-item.css',
})
export class IdsSideNavItem {
    /** Router path the item navigates to. */
    public readonly link = input.required<string>();

    /** Accessible name, also shown as a tooltip on the right; the item has no visible text. */
    public readonly label = input<string>('');

    /** Material Symbols name of the icon. */
    public readonly icon = input.required<string>();

    /** Dims the item and takes it out of navigation and the tab order. */
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });
}
