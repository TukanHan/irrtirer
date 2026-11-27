import { booleanAttribute, Component, ElementRef, input, output, viewChild } from '@angular/core';
import { Clickable, IDS_NATIVE_CONTROL_HOST, NativeControlHost } from 'irr-design-system/internal';

export type IdsFlatButtonVariant = 'accent' | 'neutral' | 'danger';

/**
 * Borderless button whose surface shows only on hover, focus and press. Fits icon-only actions and actions inside other controls.
 * Renders a native `<button>`.
 */
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
            <span class="ids-flat-action-content ids-type-label-lg">
                <ng-content />
            </span>
        </button>
    `,
    styleUrls: [
        './flat-button.css',
        '../../styles/shared/ids-flat-action.css',
        '../../styles/shared/ids-action.css',
        '../../styles/shared/typography/ids-type-label-lg.css',
    ],
})
export class IdsFlatButton implements Clickable, NativeControlHost {
    /** Emitted when the button is activated by click, `Enter` or `Space`; never while disabled. */
    public readonly clicked = output<MouseEvent>();

    /** Blocks the button and dims it. */
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });

    /** Color of the content and of the hover, focus and press surface. */
    public readonly variant = input<IdsFlatButtonVariant>('neutral');

    /** Native `type` of the inner button; `submit` and `reset` act on the enclosing form. */
    public readonly type = input<'button' | 'submit' | 'reset'>('button');

    /** Accessible name; required when the content is not text (e.g. icon only). */
    public readonly ariaLabel = input<string>('');

    /** @internal */
    public readonly nativeControl = viewChild.required<ElementRef<HTMLButtonElement>>('control');
}
