import { Directive } from '@angular/core';

/** Marks content of a form input to be shown inside its frame, after the value. */
@Directive({
    selector: '[idsSuffix]',
})
export class IdsSuffix {}
