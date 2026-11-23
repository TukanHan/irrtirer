import { Component, input } from '@angular/core';

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
            <div class="ids-form-field-errors">
                <ng-content select="ids-error" />
            </div>
        }
    `,
    styleUrl: './form-field.css',
    host: {
        '[class.ids-text-input--invalid]': 'showError()',
    }
})
export class IdsFormField {
    public readonly label = input.required<string>();
    public readonly required = input.required<boolean>();
    public readonly placeholder = input.required<string>();
    public readonly id = input.required<string>();
    public readonly isEmpty = input.required<boolean>();
    public readonly showError = input.required<boolean>();
}
