import { Component, computed, input } from '@angular/core';
import { formFieldErrorsId } from 'irr-design-system/core';

@Component({
    selector: 'ids-form-field',
    template: `
        @let labelValue = label();
        @if (labelValue) {
            <label class="ids-form-field-label" [for]="id()" [attr.data-required]="required() ? '' : null">{{ labelValue }}</label>
        }
        <div class="ids-form-field-frame">
            <ng-content select="[idsPrefix]" />
            <div class="ids-form-field-control">
                @if (isEmpty()) {
                    <span class="ids-form-field-placeholder">{{ placeholder() }}</span>
                }
                <span class="ids-form-field-input"><ng-content /></span>
            </div>
            <ng-content select="[idsSuffix]" />
        </div>

        @if (showError()) {
            <div class="ids-form-field-errors" [id]="errorsId()">
                <ng-content select="ids-error" />
            </div>
        }
    `,
    styleUrl: './form-field.css',
})
export class IdsFormField {
    public readonly label = input.required<string>();

    public readonly required = input.required<boolean>();

    public readonly placeholder = input.required<string>();

    public readonly id = input.required<string>();

    public readonly isEmpty = input.required<boolean>();

    public readonly showError = input.required<boolean>();

    protected readonly errorsId = computed(() => formFieldErrorsId(this.id()));
}
