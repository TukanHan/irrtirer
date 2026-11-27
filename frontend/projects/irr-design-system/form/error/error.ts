import { Component } from '@angular/core';

/** Error message of a form input; projected into it and shown below the field while the input shows its errors. */
@Component({
    selector: 'ids-error',
    template: `<ng-content />`,
    styleUrl: './error.css',
})
export class IdsError {}
