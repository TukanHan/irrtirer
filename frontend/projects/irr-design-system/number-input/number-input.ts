import { booleanAttribute, Component, computed, input, model, output } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { formFieldErrorsId, IdentityGenerator, injectControlId } from 'irr-design-system/core';
import { IdsFormField } from 'irr-design-system/form';

/**
 * Numeric field with a label, optional prefix/suffix and error messages.
 * Bind it to Signal Forms with `[formField]`.
 * Implements the [APG Spinbutton pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/).
 */
@Component({
    selector: 'ids-number-input',
    imports: [IdsFormField],
    hostDirectives: [IdentityGenerator],
    template: ` <ids-form-field
        [label]="label()"
        [required]="required()"
        [placeholder]="placeholder()"
        [isEmpty]="value() === null"
        [showError]="showError()"
        [id]="identifier"
    >
        <ng-content select="[idsPrefix]" ngProjectAs="[idsPrefix]" />
        <input
            [value]="value()"
            (input)="onInput($event)"
            (blur)="touch.emit()"
            [disabled]="disabled()"
            [required]="required()"
            [attr.aria-invalid]="showError() ? 'true' : null"
            [attr.aria-describedby]="showError() ? errorsId : null"
            type="number"
            class="input"
            [id]="identifier"
        />
        <ng-content select="[idsSuffix]" ngProjectAs="[idsSuffix]" />
        <ng-content select="ids-error" ngProjectAs="ids-error" />
    </ids-form-field>`,
    styleUrl: './number-input.css',
})
export class IdsNumberInput implements FormValueControl<number | null> {
    /** Emitted on blur. Marks the field as touched when bound with `[formField]`. */
    public readonly touch = output();

    /** The entered number, or `null` when the field is empty, for two-way binding with `[(value)]`. Managed by the form when bound with `[formField]`. */
    public readonly value = model<number | null>(null);

    /** Text above the field; not rendered when empty. */
    public readonly label = input<string>('');

    /** Blocks editing and dims the field. Set by the form when bound with `[formField]`. */
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });

    /** Marks the label with an asterisk. Set by the form when bound with `[formField]`. */
    public readonly required = input<boolean>(false, { transform: booleanAttribute });

    /** Hint shown while the value is empty. */
    public readonly placeholder = input<string>('');

    /** Shows the error state once `touched` is set. Set by the form when bound with `[formField]`. */
    public readonly invalid = input<boolean>(false, { transform: booleanAttribute });

    /** Allows `invalid` to show the error state. Set by the form when bound with `[formField]`. */
    public readonly touched = input<boolean>(false, { transform: booleanAttribute });

    protected readonly showError = computed(() => this.invalid() && this.touched() && !this.disabled());

    protected readonly identifier = injectControlId((id) => `ids-number-input-${id}`);

    protected readonly errorsId = formFieldErrorsId(this.identifier);

    protected onInput(event: Event): void {
        const number = (event.target as HTMLInputElement).valueAsNumber;
        this.value.set(Number.isNaN(number) ? null : number);
    }
}
