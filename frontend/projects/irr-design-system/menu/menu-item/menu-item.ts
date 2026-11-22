import { booleanAttribute, Component, input, output } from '@angular/core';
import { Clickable } from 'irr-design-system/core';

@Component({
    selector: 'ids-menu-item',
    template: `
        <button class="ids-menu-item ids-menu-item-label" type="button" [disabled]="disabled()" (click)="clicked.emit($event)">
            <ng-content />
        </button>
    `,
    styleUrl: './menu-item.css',
})
export class IdsMenuItem implements Clickable {
    public readonly clicked = output<MouseEvent>();
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });
}
