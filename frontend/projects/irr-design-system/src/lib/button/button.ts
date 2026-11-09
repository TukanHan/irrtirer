import { Component, input, output } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

@Component({
    selector: 'ids-button',
    template: `
        <button class="ids-button ids-button--{{ variant() }}" [disabled]="disabled()" [type]="type()" (click)="clicked.emit($event)">
            <span class="button-content ids-button-label">
                <ng-content />
            </span>
        </button>
    `,
    styleUrl: './button.css',
})
export class IdsButton {
    public readonly clicked = output<MouseEvent>();
    public readonly disabled = input<boolean>(false);
    public readonly variant = input<ButtonVariant>('primary');
    public readonly type = input<'button' | 'submit' | 'reset'>('button');
}
