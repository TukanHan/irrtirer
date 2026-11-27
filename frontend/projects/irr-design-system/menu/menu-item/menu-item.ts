import { booleanAttribute, Component, ElementRef, input, output, viewChild } from '@angular/core';
import { Clickable, NativeControlHost } from 'irr-design-system/internal';

/** Action in an `ids-menu`. Activating it closes the menu and returns focus to the trigger. */
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
    /** Emitted when the item is activated by click, `Enter` or `Space`. */
    public readonly clicked = output<MouseEvent>();

    /** Blocks the item and dims it; arrow keys skip it. */
    public readonly disabled = input<boolean>(false, { transform: booleanAttribute });

    /** @internal */
    public readonly nativeControl = viewChild.required<ElementRef<HTMLButtonElement>>('control');
}
