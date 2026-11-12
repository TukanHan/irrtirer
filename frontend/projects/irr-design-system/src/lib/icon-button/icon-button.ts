import { booleanAttribute, Component, input, output } from '@angular/core';

export type IconButtonVariant = 'accent' | 'neutral' | 'danger';

@Component({
    selector: 'ids-icon-button',
    template: `
        <button class="ids-icon-button ids-icon-button--{{ variant() }}" [disabled]="disabled()" [type]="type()" (click)="clicked.emit($event)">
            <span class="ids-icon-button-content ids-button-label">
                <ng-content />
            </span>
        </button>`,
    styleUrl: './icon-button.css',
})
export class IdsIconButton {
    public readonly clicked = output<MouseEvent>();
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });
    public readonly variant = input<IconButtonVariant>('neutral');
    public readonly type = input<'button' | 'submit' | 'reset'>('button');
}
