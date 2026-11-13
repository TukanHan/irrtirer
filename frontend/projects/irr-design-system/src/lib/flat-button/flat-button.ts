import { booleanAttribute, Component, input, output } from '@angular/core';

export type FlatButtonVariant = 'accent' | 'neutral' | 'danger';

@Component({
    selector: 'ids-flat-button',
    template: `
        <button class="ids-flat-action ids-flat-button--{{ variant() }}" [disabled]="disabled()" [type]="type()" (click)="clicked.emit($event)">
            <span class="ids-flat-action-content ids-button-label">
                <ng-content />
            </span>
        </button>
    `,
    styleUrls: ['./flat-button.css', './../styles/shared/ids-flat-action.css', './../styles/shared/ids-action.css'],
})
export class IdsFlatButton {
    public readonly clicked = output<MouseEvent>();
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });
    public readonly variant = input<FlatButtonVariant>('neutral');
    public readonly type = input<'button' | 'submit' | 'reset'>('button');
}
