import { booleanAttribute, Component, ElementRef, input, output, viewChild } from '@angular/core';
import { Clickable, IDS_NATIVE_CONTROL_HOST, NativeControlHost } from 'irr-design-system/core';

export type IdsFlatButtonVariant = 'accent' | 'neutral' | 'danger';

@Component({
    selector: 'ids-flat-button',
    providers: [{ provide: IDS_NATIVE_CONTROL_HOST, useExisting: IdsFlatButton }],
    template: `
        <button
            #control
            class="ids-flat-action ids-flat-button--{{ variant() }}"
            [disabled]="disabled()"
            [type]="type()"
            [attr.aria-label]="ariaLabel() || null"
            (click)="clicked.emit($event)"
        >
            <span class="ids-flat-action-content ids-button-label">
                <ng-content />
            </span>
        </button>
    `,
    styleUrls: ['./flat-button.css', '../../styles/shared/ids-flat-action.css', '../../styles/shared/ids-action.css'],
})
export class IdsFlatButton implements Clickable, NativeControlHost {
    public readonly clicked = output<MouseEvent>();
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });
    public readonly variant = input<IdsFlatButtonVariant>('neutral');
    public readonly type = input<'button' | 'submit' | 'reset'>('button');
    /** Accessible name; required when the content is not text (e.g. icon only). */
    public readonly ariaLabel = input<string>('');

    public readonly nativeControl = viewChild.required<ElementRef<HTMLButtonElement>>('control');
}
