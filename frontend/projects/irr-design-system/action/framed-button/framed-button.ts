import { booleanAttribute, Component, input, output } from '@angular/core';
import { Clickable, IDS_CLICKABLE } from 'irr-design-system/core';

export type IdsFramedButtonVariant = 'accent' | 'neutral' | 'danger';

@Component({
    selector: 'ids-framed-button',
    providers: [{ provide: IDS_CLICKABLE, useExisting: IdsFramedButton }],
    template: `
        <button
            class="ids-framed-button ids-framed-button--{{ variant() }}"
            [disabled]="disabled()"
            [type]="type()"
            [attr.aria-label]="ariaLabel() || null"
            (click)="clicked.emit($event)"
        >
            <span class="ids-framed-button-content ids-button-label">
                <ng-content />
            </span>
        </button>
    `,
    styleUrls: ['./framed-button.css', '../../styles/shared/ids-action.css'],
})
export class IdsFramedButton implements Clickable {
    public readonly clicked = output<MouseEvent>();
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });
    public readonly variant = input<IdsFramedButtonVariant>('neutral');
    public readonly type = input<'button' | 'submit' | 'reset'>('button');
    /** Accessible name; required when the content is not text (e.g. icon only). */
    public readonly ariaLabel = input<string>('');
}
