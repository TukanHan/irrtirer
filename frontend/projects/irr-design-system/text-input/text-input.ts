import { booleanAttribute, Component, computed, input, model, output } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { IdsFormField } from 'irr-design-system/form';
import { formFieldErrorsId, IdentityGenerator, injectControlId } from 'irr-design-system/internal';

/**
 * Single-line text field with a label, optional prefix/suffix and error messages.
 * Bind it to Signal Forms with `[formField]`.
 * Renders a native `<input>`.
 */
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
                [required]="required()"
                [attr.aria-invalid]="showError() ? 'true' : null"
                [attr.aria-describedby]="showError() ? errorsId : null"
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
    /** Emitted on blur. Marks the field as touched when bound with `[formField]`. */
    public readonly touch = output();

    /** The entered text, for two-way binding with `[(value)]`. Managed by the form when bound with `[formField]`. */
    public readonly value = model<string>('');

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

    protected readonly identifier = injectControlId((id) => `ids-text-input-${id}`);

    protected readonly errorsId = formFieldErrorsId(this.identifier);
}
