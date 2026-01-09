import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, input } from '@angular/core';

@Component({
    selector: 'app-expandable-panel',
    templateUrl: './expandable-panel.component.html',
    styleUrl: 'expandable-panel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.open]': 'isOpen()',
        '[style.--expand-duration]': 'expandDuration() + "ms"',
    },
})
export class ExpandablePanelComponent {
    public readonly isOpen = input.required<boolean>();

    private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

    protected readonly expandDuration = computed(() => {
        const height = this.elementRef.nativeElement.scrollHeight;
        const time = 150 + Math.sqrt(height) * 5;
        return this.isOpen() ? time : time * 0.66;
    });
}
