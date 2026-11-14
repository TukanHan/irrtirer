import { Directive, ElementRef, inject, input } from '@angular/core';
import { IdsMenu } from './menu';

@Directive({
    selector: 'ids-flat-button[idsMenuTrigger], ids-framed-button[idsMenuTrigger]',
    host: {
        '(clicked)': 'onClicked()',
    },
})
export class IdsMenuTrigger {
    public readonly menu = input.required<IdsMenu>();

    private readonly host = inject(ElementRef<HTMLElement>);

    protected onClicked(): void {
        this.menu().toggle(this.host.nativeElement);
    }
}
