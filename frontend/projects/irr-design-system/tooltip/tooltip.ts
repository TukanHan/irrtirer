import { ConnectedPosition, FlexibleConnectedPositionStrategy, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';
import { IdentityCounter } from 'irr-design-system/internal';
import { IdsTooltipPanel } from './tooltip-panel/tooltip-panel';

export type IdsTooltipPosition = 'auto' | 'top' | 'right' | 'bottom' | 'left';

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
        '(document:keydown.escape)': 'onEscape()',
        '(window:resize)': 'onViewportResize()',
    },
})
export class IdsTooltip {
    /** Text of the hint. The tooltip does not open while it is blank. */
    public readonly idsTooltip = input.required<string>();

    /** Preferred side of the host. `auto` picks a side away from the nearest viewport edge. Moves to another side when the panel does not fit. */
    public readonly idsTooltipPosition = input<IdsTooltipPosition>('auto');

    private readonly host = inject(ElementRef<HTMLElement>);
    private readonly overlay = inject(Overlay);
    private readonly destroyRef = inject(DestroyRef);
    private readonly panelId = `ids-tooltip-${inject(IdentityCounter).getNextIdNumber()}`;

    private overlayRef: OverlayRef | undefined;
    private positionStrategy: FlexibleConnectedPositionStrategy | undefined;
    private describedElement: Element | undefined;

    constructor() {
        this.destroyRef.onDestroy(() => this.closePanel());
    }

    protected onMouseEnter(): void {
        this.openPanel();
    }

    protected onMouseLeave(event: MouseEvent): void {
        this.closeUnlessPointerStays(event.relatedTarget);
    }

    protected onFocusIn(event: FocusEvent): void {
        this.openPanel();
        this.describe(event.target as Element);
    }

    protected onFocusOut(): void {
        this.closePanel();
    }

    protected onEscape(): void {
        this.closePanel();
    }

    protected onViewportResize(): void {
        this.updatePositions();
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
        const panel = this.overlayRef.attach(portal);
        panel.setInput('panelId', this.panelId);
        panel.setInput('text', this.idsTooltip());

        this.overlayRef.overlayElement.addEventListener('mouseout', (event) => this.closeUnlessPointerStays(event.relatedTarget));
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

    private updatePositions(): void {
        if (!this.overlayRef || !this.positionStrategy) {
            return;
        }

        this.positionStrategy.withPositions(this.getPositions());
        this.overlayRef.updatePosition();
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

    private getPositionsFor(position: Exclude<IdsTooltipPosition, 'auto'>): ConnectedPosition[] {
        const preferred = this.getPosition(position);
        const fallbacks: ConnectedPosition[] = [
            this.getPosition('bottom'),
            this.getPosition('top'),
            this.getPosition('right'),
            this.getPosition('left'),
        ];

        return [
            preferred,
            ...fallbacks.filter(
                (fallback) =>
                    fallback.originX !== preferred.originX ||
                    fallback.originY !== preferred.originY ||
                    fallback.overlayX !== preferred.overlayX ||
                    fallback.overlayY !== preferred.overlayY,
            ),
        ];
    }

    private getPosition(position: Exclude<IdsTooltipPosition, 'auto'>): ConnectedPosition {
        switch (position) {
            case 'top':
                return { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom' };
            case 'right':
                return { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center' };
            case 'left':
                return { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center' };
            case 'bottom':
                return { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top' };
            default:
                return { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top' };
        }
    }
}
