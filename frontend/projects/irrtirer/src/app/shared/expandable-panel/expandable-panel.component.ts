import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
    selector: 'app-expandable-panel',
    templateUrl: './expandable-panel.component.html',
    styleUrl: 'expandable-panel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.open]': 'isOpen()',
        '[style.--expand-duration]': 'expandDuration() + "ms"',
        '[style.--panel-height]': 'panelHeight() + "px"',
    },
})
export class ExpandablePanelComponent implements OnInit, OnDestroy {
    public readonly isOpen = input.required<boolean>();

    protected readonly panelHeight = signal<number>(0);

    private readonly observer: MutationObserver = new MutationObserver(() => {
        this.panelHeight.set(this.elementRef.nativeElement.scrollHeight);
    });

    protected readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

    protected readonly expandDuration = computed(() => {
        const height = this.panelHeight();
        const time = 150 + Math.sqrt(height) * 5;
        return this.isOpen() ? time : time * 0.66;
    });

    public ngOnInit(): void {
        this.observer.observe(this.elementRef.nativeElement, {
            attributeFilter: ['scrollHeight'],
            subtree: true,
            childList: true,
        });
    }

    public ngOnDestroy(): void {
        this.observer.disconnect();
    }
}
