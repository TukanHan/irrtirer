import { booleanAttribute, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'ids-side-nav-item',
    imports: [RouterLink, RouterLinkActive],
    template: `
        <a
            class="ids-side-nav-item"
            [routerLink]="disabled() ? null : link()"
            routerLinkActive="ids-side-nav-item--active"
            [attr.aria-disabled]="disabled() ? 'true' : null"
            [attr.tabindex]="disabled() ? -1 : null"
        >
            <ng-content />
        </a>
    `,
    styleUrl: './side-nav-item.css',
})
export class IdsSideNavItem {
    public readonly link = input.required<string>();
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });
}
