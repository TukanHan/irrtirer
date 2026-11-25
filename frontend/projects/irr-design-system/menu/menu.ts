import { Component, contentChildren, ElementRef, inject, input, OutputRefSubscription, signal } from '@angular/core';
import { ListKeyManager } from '@angular/cdk/a11y';
import { CdkConnectedOverlay, ConnectedPosition } from '@angular/cdk/overlay';
import { IdentityCounter, OVERLAY_SPACING } from 'irr-design-system/core';
import { IdsMenuItem } from './menu-item/menu-item';

@Component({
    selector: 'ids-menu',
    imports: [CdkConnectedOverlay],
    template: `
        <ng-template
            cdkConnectedOverlay
            [cdkConnectedOverlayOrigin]="origin()"
            [cdkConnectedOverlayOpen]="isOpen()"
            [cdkConnectedOverlayPositions]="positions"
            [cdkConnectedOverlayPush]="true"
            [cdkConnectedOverlayViewportMargin]="viewportMargin"
            (overlayOutsideClick)="close()"
            (attach)="onOpened()"
            (detach)="onClosed()"
        >
            <div
                role="menu"
                class="ids-panel ids-menu-panel"
                [class]="panelClass()"
                [id]="panelId"
                [attr.aria-labelledby]="labelledBy()"
                (keydown)="onKeydown($event)"
            >
                <ng-content />
            </div>
        </ng-template>
    `,
    styleUrls: ['./menu.css', '../styles/shared/ids-panel.css'],
})
export class IdsMenu {
    public readonly panelClass = input<string>();

    public readonly panelId = `ids-menu-${inject(IdentityCounter).getNextIdNumber()}`;

    protected readonly viewportMargin = OVERLAY_SPACING;

    private readonly host = inject(ElementRef<HTMLElement>);

    private readonly items = contentChildren(IdsMenuItem, { descendants: true });

    private readonly openState = signal<boolean>(false);

    public readonly isOpen = this.openState.asReadonly();

    protected readonly origin = signal<HTMLElement>(this.host.nativeElement);

    protected readonly labelledBy = signal<string | null>(null);

    protected readonly positions: ConnectedPosition[] = [
        { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
        { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom' },
    ];

    private triggerControl: HTMLElement | undefined;
    private keyManager: ListKeyManager<HTMLButtonElement> | undefined;
    private itemClicks: OutputRefSubscription[] = [];

    /** Opens the menu below `origin`, or closes it. `triggerControl` names the menu and gets focus back on close. */
    public toggle(origin: HTMLElement, triggerControl: HTMLElement): void {
        this.origin.set(origin);
        this.triggerControl = triggerControl;
        this.labelledBy.set(triggerControl.id);
        this.openState.update((isOpen) => !isOpen);
    }

    public close(): void {
        this.openState.set(false);
    }

    protected onOpened(): void {
        // Native buttons, not items: a signal `disabled` breaks ListKeyManagerOption; native focus() breaks FocusableOption.
        const controls = this.items().map((item) => item.nativeControl().nativeElement);
        this.keyManager = new ListKeyManager(controls).withWrap().withHomeAndEnd();
        this.keyManager.setFirstItemActive();
        this.keyManager.activeItem?.focus();

        this.itemClicks = this.items().map((item) => item.clicked.subscribe(() => this.closeAndReturnFocus()));
    }

    protected onClosed(): void {
        this.keyManager?.destroy();
        this.keyManager = undefined;
        this.itemClicks.forEach((subscription) => subscription.unsubscribe());
        this.itemClicks = [];
    }

    protected onKeydown(event: KeyboardEvent): void {
        if (event.key === 'Escape' || event.key === 'Tab') {
            this.closeAndReturnFocus();
            return;
        }

        this.keyManager?.onKeydown(event);
        this.keyManager?.activeItem?.focus();
    }

    private closeAndReturnFocus(): void {
        this.close();
        this.triggerControl?.focus();
    }
}
