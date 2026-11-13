import { booleanAttribute, Component, input, output } from '@angular/core';

export type FlatButtonVariant = 'accent' | 'neutral' | 'danger';

@Component({
    selector: 'ids-flat-button',
    template: `
        <button class="ids-flat-button ids-flat-button--{{ variant() }}" [disabled]="disabled()" [type]="type()" (click)="clicked.emit($event)">
            <span class="ids-flat-button-content ids-button-label">
                <ng-content />
            </span>
        </button>
    `,
    styleUrl: './flat-button.css',
})
export class IdsFlatButton {
    public readonly clicked = output<MouseEvent>();
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });
    public readonly variant = input<FlatButtonVariant>('neutral');
    public readonly type = input<'button' | 'submit' | 'reset'>('button');
}
