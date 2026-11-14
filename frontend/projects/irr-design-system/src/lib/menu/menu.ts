import { Component, ElementRef, inject, signal } from '@angular/core';
import { CdkConnectedOverlay, ConnectedPosition } from '@angular/cdk/overlay';

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
            (overlayOutsideClick)="close()"
        >
            <div class="ids-panel">
                <ng-content />
            </div>
        </ng-template>
    `,
    styleUrl: './menu.css',
})
export class IdsMenu {
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
