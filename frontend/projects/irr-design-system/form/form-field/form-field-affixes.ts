import { Directive } from '@angular/core';

@Directive({
    selector: '[idsPrefix]',
})
export class IdsPrefix {}

@Directive({
    selector: '[idsSuffix]',
})
export class IdsSuffix {}
