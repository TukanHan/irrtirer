import { Component, computed, input } from '@angular/core';
import { formFieldErrorsId } from 'irr-design-system/internal';

/** Layout shared by form inputs: label, frame with affixes and placeholder around the projected control, and errors. */
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
    /** Text above the frame; not rendered when empty. */
    public readonly label = input.required<string>();

    /** Marks the label with an asterisk. */
    public readonly required = input.required<boolean>();

    /** Hint shown while `isEmpty` is true. */
    public readonly placeholder = input.required<string>();

    /** `id` of the projected control; links the label and the error container to it. */
    public readonly id = input.required<string>();

    /** Whether the control has no value, which shows the placeholder. */
    public readonly isEmpty = input.required<boolean>();

    /** Renders the projected `ids-error` elements below the frame. */
    public readonly showError = input.required<boolean>();

    protected readonly errorsId = computed(() => formFieldErrorsId(this.id()));
}
