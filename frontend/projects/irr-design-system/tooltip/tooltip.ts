import { hasModifierKey } from '@angular/cdk/keycodes';
import { ConnectedPosition, FlexibleConnectedPositionStrategy, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { afterRenderEffect, ComponentRef, DestroyRef, Directive, ElementRef, inject, input, untracked } from '@angular/core';
import { IdentityCounter } from 'irr-design-system/internal';
import { IdsTooltipPanel } from './tooltip-panel/tooltip-panel';

export type IdsTooltipPosition = 'auto' | 'top' | 'right' | 'bottom' | 'left';

type Side = Exclude<IdsTooltipPosition, 'auto'>;

/** In the order they are tried when the preferred side does not fit. */
const sides: Side[] = ['bottom', 'top', 'right', 'left'];

const connectedPositions: Record<Side, ConnectedPosition> = {
    top: { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom' },
    right: { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center' },
    bottom: { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top' },
    left: { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center' },
};

/**
 * Shows a text hint in a floating panel while the host is hovered or focused.
 * Implements the [APG Tooltip pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/).
 */
@Directive({
    selector: '[idsTooltip]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave($event)',
        '(focusin)': 'onFocusIn($event)',
        '(focusout)': 'onFocusOut()',
    },
})
export class IdsTooltip {
    /** Text of the hint. The tooltip does not open while it is blank. */
    public readonly idsTooltip = input.required<string>();

    /** Preferred side of the host. `auto` means below, or the inner side for a host at the left or right viewport edge but not at the top. Moves to another side when the panel does not fit. */
    public readonly idsTooltipPosition = input<IdsTooltipPosition>('auto');

    /** Classes for the floating panel, which is rendered outside the host element. */
    public readonly idsTooltipPanelClass = input<string>();

    private readonly host = inject(ElementRef<HTMLElement>);
    private readonly overlay = inject(Overlay);
    private readonly destroyRef = inject(DestroyRef);
    private readonly panelId = `ids-tooltip-${inject(IdentityCounter).getNextIdNumber()}`;

    private overlayRef: OverlayRef | undefined;
    private positionStrategy: FlexibleConnectedPositionStrategy | undefined;
    private panel: ComponentRef<IdsTooltipPanel> | undefined;
    private focusedElement: Element | undefined;
    private describedElement: Element | undefined;

    constructor() {
        this.destroyRef.onDestroy(() => this.closePanel());
        this.refreshPanelOnInputChanges();
    }

    protected onMouseEnter(): void {
        this.openPanel();
    }

    protected onMouseLeave(event: MouseEvent): void {
        this.closeUnlessPointerStays(event.relatedTarget);
    }

    protected onFocusIn(event: FocusEvent): void {
        this.openPanel();
        this.focusedElement = event.target as Element;
        this.describe(this.focusedElement);
    }

    protected onFocusOut(): void {
        this.focusedElement = undefined;
        this.closePanel();
    }

    private refreshPanelOnInputChanges(): void {
        afterRenderEffect(() => {
            this.idsTooltip();
            this.idsTooltipPosition();
            this.idsTooltipPanelClass();
            untracked(() => this.refreshPanel());
        });
    }

    private openPanel(): void {
        if (this.overlayRef || !this.idsTooltip().trim()) {
            return;
        }

        this.positionStrategy = this.overlay.position().flexibleConnectedTo(this.host).withPositions(this.getPositions()).withPush(true);

        this.overlayRef = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            hasBackdrop: false,
        });

        const portal = new ComponentPortal(IdsTooltipPanel);
        this.panel = this.overlayRef.attach(portal);
        this.renderPanel();

        this.overlayRef.overlayElement.addEventListener('mouseout', (event) => this.closeUnlessPointerStays(event.relatedTarget));
        this.overlayRef.keydownEvents().subscribe((event) => this.closeOnEscape(event));
    }

    private renderPanel(): void {
        this.panel?.setInput('panelId', this.panelId);
        this.panel?.setInput('text', this.idsTooltip());
        this.panel?.setInput('panelClass', this.idsTooltipPanelClass());
        this.panel?.changeDetectorRef.detectChanges();
    }

    private refreshPanel(): void {
        if (!this.overlayRef) {
            return;
        }

        if (!this.idsTooltip().trim()) {
            this.closePanel();
            return;
        }

        this.renderPanel();
        this.positionStrategy?.withPositions(this.getPositions());
        this.overlayRef.updatePosition();

        if (this.focusedElement) {
            this.removeDescription();
            this.describe(this.focusedElement);
        }
    }

    private closeOnEscape(event: KeyboardEvent): void {
        if (event.key === 'Escape' && !hasModifierKey(event)) {
            event.preventDefault();
            this.closePanel();
        }
    }

    private closeUnlessPointerStays(pointerTarget: EventTarget | null): void {
        const staysOnHost = pointerTarget instanceof Node && this.host.nativeElement.contains(pointerTarget);
        const staysOnPanel = pointerTarget instanceof Node && !!this.overlayRef?.overlayElement.contains(pointerTarget);
        if (!staysOnHost && !staysOnPanel) {
            this.closePanel();
        }
    }

    private closePanel(): void {
        this.removeDescription();
        this.overlayRef?.dispose();
        this.overlayRef = undefined;
        this.positionStrategy = undefined;
        this.panel = undefined;
    }

    private describe(element: Element): void {
        const alreadyNamedByText = element.getAttribute('aria-label') === this.idsTooltip();
        if (!this.overlayRef || alreadyNamedByText) {
            return;
        }

        element.setAttribute('aria-describedby', [...this.getForeignDescribedByIds(element), this.panelId].join(' '));
        this.describedElement = element;
    }

    private removeDescription(): void {
        if (!this.describedElement) {
            return;
        }

        const ids = this.getForeignDescribedByIds(this.describedElement);
        if (ids.length) {
            this.describedElement.setAttribute('aria-describedby', ids.join(' '));
        } else {
            this.describedElement.removeAttribute('aria-describedby');
        }
        this.describedElement = undefined;
    }

    private getForeignDescribedByIds(element: Element): string[] {
        const ids = element.getAttribute('aria-describedby')?.split(' ') ?? [];
        return ids.filter((id) => id && id !== this.panelId);
    }

    private getPositions(): ConnectedPosition[] {
        const position = this.idsTooltipPosition();
        if (position !== 'auto') {
            return this.getPositionsFor(position);
        }

        const hostRect = this.host.nativeElement.getBoundingClientRect();
        const edgeSpace = 32;

        if (hostRect.top <= edgeSpace) {
            return this.getPositionsFor('bottom');
        }

        if (hostRect.left <= edgeSpace) {
            return this.getPositionsFor('right');
        }

        if (hostRect.right >= window.innerWidth - edgeSpace) {
            return this.getPositionsFor('left');
        }

        return this.getPositionsFor('bottom');
    }

    private getPositionsFor(preferred: Side): ConnectedPosition[] {
        const fallbacks = sides.filter((side) => side !== preferred);
        return [preferred, ...fallbacks].map((side) => connectedPositions[side]);
    }
}
