import { booleanAttribute, Component, input, output } from '@angular/core';

export type FramedButtonVariant = 'accent' | 'neutral' | 'danger';

@Component({
    selector: 'ids-framed-button',
    template: `
        <button class="ids-framed-button ids-framed-button--{{ variant() }}" [disabled]="disabled()" [type]="type()" (click)="clicked.emit($event)">
            <span class="ids-framed-button-content ids-button-label">
                <ng-content />
            </span>
        </button>
    `,
    styleUrls: ['./framed-button.css', './../styles/shared/ids-action.css'],
})
export class IdsFramedButton {
    public readonly clicked = output<MouseEvent>();
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });
    public readonly variant = input<FramedButtonVariant>('neutral');
    public readonly type = input<'button' | 'submit' | 'reset'>('button');
}
