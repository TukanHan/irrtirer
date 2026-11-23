import { Component, input, model } from '@angular/core';
import { IdsFormField } from '../form-field/form-field';
import { FormValueControl } from '@angular/forms/signals';
import { IdentityGenerator, injectControlId } from '../tools/identity-generation/identity-generator';

@Component({
    selector: 'ids-text-input',
    imports: [IdsFormField],
    hostDirectives: [IdentityGenerator],
    template: `
        <ids-form-field [label]="label()" [required]="required()" [placeholder]="placeholder()" [isEmpty]="!value()" [id]="identifier">
            <ng-content select="[idsPrefix]" ngProjectAs="[idsPrefix]" />
            <input [value]="value()" (input)="value.set($any($event.target).value)" [disabled]="disabled()" type="text" class="input" [id]="identifier" />
            <ng-content select="[idsSuffix]" ngProjectAs="[idsSuffix]" />
        </ids-form-field>
    `,
    styleUrl: './text-input.css',
})
export class IdsTextInput implements FormValueControl<string> {
    public readonly value = model<string>('');

    public readonly label = input<string>('');

    public readonly disabled = input<boolean>(false);

    public readonly required = input<boolean>(false);

    public readonly placeholder = input<string>('');

    protected readonly identifier = injectControlId((id) => `ids-text-input-${id}`);
}
