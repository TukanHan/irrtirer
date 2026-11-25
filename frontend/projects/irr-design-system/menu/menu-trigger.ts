import { Directive, ElementRef, inject, input } from '@angular/core';
import { IDS_CLICKABLE } from 'irr-design-system/core';
import { IdsMenu } from './menu';

@Directive({
    selector: '[idsMenuTriggerFor]',
})
export class IdsMenuTrigger {
    public readonly idsMenuTriggerFor = input.required<IdsMenu>();

    private readonly host = inject(ElementRef<HTMLElement>);

    constructor() {
        inject(IDS_CLICKABLE, { self: true }).clicked.subscribe(() => this.idsMenuTriggerFor().toggle(this.host.nativeElement));
    }
}
