import { Component, ElementRef, inject, input, signal } from '@angular/core';
import { CdkConnectedOverlay, ConnectedPosition } from '@angular/cdk/overlay';
import { OVERLAY_SPACING } from 'irr-design-system/core';

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
        >
            <div class="ids-panel ids-menu-panel" [class]="panelClass()">
                <ng-content />
            </div>
        </ng-template>
    `,
    styleUrls: ['./menu.css', '../styles/shared/ids-panel.css'],
})
export class IdsMenu {
    public readonly panelClass = input<string>();

    protected readonly viewportMargin = OVERLAY_SPACING;

    private readonly host = inject(ElementRef<HTMLElement>);

    protected readonly isOpen = signal<boolean>(false);

    protected readonly origin = signal<HTMLElement>(this.host.nativeElement);

    protected readonly positions: ConnectedPosition[] = [
        { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
        { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom' },
    ];

    public toggle(origin: HTMLElement): void {
        this.origin.set(origin);
        this.isOpen.update((isOpen) => !isOpen);
    }

    public close(): void {
        this.isOpen.set(false);
    }
}
