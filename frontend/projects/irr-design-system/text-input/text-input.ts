import { booleanAttribute, Component, computed, input, model, output } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { IdentityGenerator, injectControlId } from 'irr-design-system/core';
import { IdsFormField } from 'irr-design-system/form';

@Component({
    selector: 'ids-text-input',
    imports: [IdsFormField],
    hostDirectives: [IdentityGenerator],
    template: `
        <ids-form-field
            [label]="label()"
            [required]="required()"
            [placeholder]="placeholder()"
            [isEmpty]="!value()"
            [showError]="showError()"
            [id]="identifier"
        >
            <ng-content select="[idsPrefix]" ngProjectAs="[idsPrefix]" />
            <input
                [value]="value()"
                (input)="value.set($any($event.target).value)"
                (blur)="touch.emit()"
                [disabled]="disabled()"
                [attr.aria-invalid]="showError() ? 'true' : null"
                type="text"
                class="input"
                [id]="identifier"
            />
            <ng-content select="[idsSuffix]" ngProjectAs="[idsSuffix]" />
            <ng-content select="ids-error" ngProjectAs="ids-error" />
        </ids-form-field>
    `,
    styleUrl: './text-input.css',
})
export class IdsTextInput implements FormValueControl<string> {
    public readonly touch = output();

    public readonly value = model<string>('');

    public readonly label = input<string>('');

    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });

    public readonly required = input<boolean>(false, { transform: booleanAttribute });

    public readonly placeholder = input<string>('');

    public readonly invalid = input<boolean>(false, { transform: booleanAttribute });

    public readonly touched = input<boolean>(false, { transform: booleanAttribute });

    protected readonly showError = computed(() => this.invalid() && this.touched() && !this.disabled());

    protected readonly identifier = injectControlId((id) => `ids-text-input-${id}`);
}
