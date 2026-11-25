import { Component, computed, ElementRef, inject, input } from '@angular/core';

@Component({
    selector: 'app-expandable-panel',
    templateUrl: './expandable-panel.html',
    styleUrl: 'expandable-panel.scss',
    host: {
        '[class.open]': 'isOpen()',
        '[style.--expand-duration]': 'expandDuration() + "ms"',
    },
})
export class ExpandablePanel {
    public readonly isOpen = input.required<boolean>();

    private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

    protected readonly expandDuration = computed(() => {
        const height = this.elementRef.nativeElement.scrollHeight;
        const time = 150 + Math.sqrt(height) * 5;
        return this.isOpen() ? time : time * 0.66;
    });
}
