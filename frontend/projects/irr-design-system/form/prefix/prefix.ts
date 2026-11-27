import { Directive } from '@angular/core';

/** Marks content of a form input to be shown inside its frame, before the value. */
@Directive({
    selector: '[idsPrefix]',
})
export class IdsPrefix {}
