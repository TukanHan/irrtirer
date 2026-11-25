import { Component, input } from '@angular/core';

@Component({
    selector: 'ids-side-nav',
    template: `<nav [attr.aria-label]="ariaLabel() || null"><ng-content /></nav>`,
    styleUrl: './side-nav.css',
})
export class IdsSideNav {
    /** Accessible name of the navigation landmark; needed when the page has more than one. */
    public readonly ariaLabel = input<string>('');
}
