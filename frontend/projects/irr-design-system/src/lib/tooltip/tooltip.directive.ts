import { DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';
import { ConnectedPosition, FlexibleConnectedPositionStrategy, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OVERLAY_SPACING } from '../core/spacing';
import { IdsTooltipPanel } from './tooltip-panel';

export type IdsTooltipPosition = 'auto' | 'top' | 'right' | 'bottom' | 'left';

@Directive({
    selector: '[idsTooltip]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()',
        '(focusin)': 'onFocusIn()',
        '(focusout)': 'onFocusOut()',
        '(window:resize)': 'onViewportResize()',
    },
})
export class IdsTooltipDirective {
    public readonly idsTooltip = input.required<string>();
    public readonly idsTooltipPosition = input<IdsTooltipPosition>('auto');

    private readonly host = inject(ElementRef<HTMLElement>);
    private readonly overlay = inject(Overlay);
    private readonly destroyRef = inject(DestroyRef);

    private overlayRef: OverlayRef | undefined;
    private positionStrategy: FlexibleConnectedPositionStrategy | undefined;

    constructor() {
        this.destroyRef.onDestroy(() => this.closePanel());
    }

    protected onMouseEnter(): void {
        this.openPanel();
    }

    protected onMouseLeave(): void {
        this.closePanel();
    }

    protected onFocusIn(): void {
        this.openPanel();
    }

    protected onFocusOut(): void {
        this.closePanel();
    }

    protected onViewportResize(): void {
        this.updatePositions();
    }

    private openPanel(): void {
        if (this.overlayRef) {
            return;
        }

        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.host)
            .withPositions(this.getPositions())
            .withPush(true)
            .withViewportMargin(OVERLAY_SPACING);

        this.overlayRef = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            hasBackdrop: false,
        });

        const portal = new ComponentPortal(IdsTooltipPanel);
        const panel = this.overlayRef.attach(portal);
        panel.setInput('text', this.idsTooltip());
    }

    private closePanel(): void {
        this.overlayRef?.dispose();
        this.overlayRef = undefined;
        this.positionStrategy = undefined;
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
                return { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -OVERLAY_SPACING };
            case 'right':
                return { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', offsetX: OVERLAY_SPACING };
            case 'left':
                return { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', offsetX: -OVERLAY_SPACING };
            case 'bottom':
                return { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: OVERLAY_SPACING };
            default:
                return { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: OVERLAY_SPACING };
        }
    }
}
