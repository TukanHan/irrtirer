import { booleanAttribute, Component, computed, input, model, output } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { IdentityGenerator, injectControlId } from 'irr-design-system/core';
import { IdsFormField } from 'irr-design-system/form';

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
            [attr.aria-invalid]="showError() ? 'true' : null"
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
    public readonly touch = output();

    public readonly value = model<number | null>(null);

    public readonly label = input<string>('');

    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });

    public readonly required = input<boolean>(false, { transform: booleanAttribute });

    public readonly placeholder = input<string>('');

    public readonly invalid = input<boolean>(false, { transform: booleanAttribute });

    public readonly touched = input<boolean>(false, { transform: booleanAttribute });

    protected readonly showError = computed(() => this.invalid() && this.touched() && !this.disabled());

    protected readonly identifier = injectControlId((id) => `ids-number-input-${id}`);

    protected onInput(event: Event): void {
        const number = (event.target as HTMLInputElement).valueAsNumber;
        this.value.set(Number.isNaN(number) ? null : number);
    }
}
