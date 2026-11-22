import { Directive, ElementRef, inject, input } from '@angular/core';
import { IdsMenu } from './menu';

@Directive({
    selector: 'ids-flat-button[idsMenuTriggerFor], ids-framed-button[idsMenuTriggerFor]',
    host: {
        '(clicked)': 'onClicked()',
    },
})
export class IdsMenuTrigger {
    public readonly idsMenuTriggerFor = input.required<IdsMenu>();

    private readonly host = inject(ElementRef<HTMLElement>);

    protected onClicked(): void {
        this.idsMenuTriggerFor().toggle(this.host.nativeElement);
    }
}
