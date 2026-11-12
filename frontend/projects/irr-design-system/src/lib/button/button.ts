import { booleanAttribute, Component, input, output } from '@angular/core';

export type ButtonVariant = 'accent' | 'neutral' | 'danger';

@Component({
    selector: 'ids-button',
    template: `
        <button class="ids-button ids-button--{{ variant() }}" [disabled]="disabled()" [type]="type()" (click)="clicked.emit($event)">
            <span class="ids-button-content ids-button-label">
                <ng-content />
            </span>
        </button>
    `,
    styleUrl: './button.css',
})
export class IdsButton {
    public readonly clicked = output<MouseEvent>();
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });
    public readonly variant = input<ButtonVariant>('neutral');
    public readonly type = input<'button' | 'submit' | 'reset'>('button');
}
