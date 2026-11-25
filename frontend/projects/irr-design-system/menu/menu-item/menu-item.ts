import { booleanAttribute, Component, ElementRef, input, output, viewChild } from '@angular/core';
import { Clickable, NativeControlHost } from 'irr-design-system/core';

@Component({
    selector: 'ids-menu-item',
    template: `
        <button
            #control
            role="menuitem"
            tabindex="-1"
            class="ids-menu-item ids-menu-item-label"
            type="button"
            [disabled]="disabled()"
            (click)="clicked.emit($event)"
        >
            <ng-content />
        </button>
    `,
    styleUrl: './menu-item.css',
})
export class IdsMenuItem implements Clickable, NativeControlHost {
    public readonly clicked = output<MouseEvent>();
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });

    public readonly nativeControl = viewChild.required<ElementRef<HTMLButtonElement>>('control');
}
