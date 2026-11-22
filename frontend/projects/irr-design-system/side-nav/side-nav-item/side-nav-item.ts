import { booleanAttribute, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IdsTooltip } from 'irr-design-system/tooltip';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'ids-side-nav-item',
    imports: [RouterLink, RouterLinkActive, IdsTooltip, MatIcon],
    template: `
        <a
            class="ids-side-nav-item"
            [routerLink]="disabled() ? null : link()"
            routerLinkActive="ids-side-nav-item--active"
            [attr.aria-disabled]="disabled() ? 'true' : null"
            [attr.aria-label]="label() || null"
            [attr.tabindex]="disabled() ? -1 : null"
            [idsTooltip]="label()"
            idsTooltipPosition="right"
        >
             <mat-icon class="ids-side-nav-item-icon material-symbols-outlined">{{icon()}}</mat-icon>
        </a>
    `,
    styleUrl: './side-nav-item.css',
})
export class IdsSideNavItem {
    public readonly link = input.required<string>();
    public readonly label = input<string>('');
    public readonly icon = input.required<string>();
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });
}
