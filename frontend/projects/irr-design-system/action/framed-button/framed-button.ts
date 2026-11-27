import { booleanAttribute, Component, ElementRef, input, output, viewChild } from '@angular/core';
import { Clickable, IDS_NATIVE_CONTROL_HOST, NativeControlHost } from 'irr-design-system/internal';

export type IdsFramedButtonVariant = 'accent' | 'neutral' | 'danger';

/**
 * Button with a visible frame that glows on hover and focus. It fills the width of its host.
 * Renders a native `<button>`.
 */
@Component({
    selector: 'ids-framed-button',
    providers: [{ provide: IDS_NATIVE_CONTROL_HOST, useExisting: IdsFramedButton }],
    template: `
        <button
            #control
            class="ids-framed-button ids-framed-button--{{ variant() }}"
            [disabled]="disabled()"
            [type]="type()"
            [attr.aria-label]="ariaLabel() || null"
            (click)="clicked.emit($event)"
        >
            <span class="ids-framed-button-content ids-type-label-lg">
                <ng-content />
            </span>
        </button>
    `,
    styleUrls: ['./framed-button.css', '../../styles/shared/ids-action.css', '../../styles/shared/typography/ids-type-label-lg.css'],
})
export class IdsFramedButton implements Clickable, NativeControlHost {
    /** Emitted when the button is activated by click, `Enter` or `Space`; never while disabled. */
    public readonly clicked = output<MouseEvent>();

    /** Blocks the button and dims it. */
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });

    /** Color of the frame and its glow. */
    public readonly variant = input<IdsFramedButtonVariant>('neutral');

    /** Native `type` of the inner button; `submit` and `reset` act on the enclosing form. */
    public readonly type = input<'button' | 'submit' | 'reset'>('button');

    /** Accessible name; required when the content is not text (e.g. icon only). */
    public readonly ariaLabel = input<string>('');

    /** @internal */
    public readonly nativeControl = viewChild.required<ElementRef<HTMLButtonElement>>('control');
}
