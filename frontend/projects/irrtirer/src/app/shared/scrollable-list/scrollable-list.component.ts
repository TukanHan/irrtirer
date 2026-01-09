import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, contentChild, input, signal, TemplateRef } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-scrollable-list',
    imports: [NgTemplateOutlet, MatButton, TranslateModule],
    templateUrl: './scrollable-list.component.html',
    styleUrl: './scrollable-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollableListComponent<T> {
    public readonly template = contentChild.required<TemplateRef<unknown>>('element');

    public readonly pageSize = input<number>(50);

    public readonly items = input<T[]>();

    private readonly page = signal<number>(1);

    protected readonly itemsToShow = computed<T[]>(() => {
        const pageSize = this.pageSize();
        const startIndex = (this.page() - 1) * pageSize;
        return this.items().slice(startIndex, startIndex + pageSize);
    });

    protected readonly hasPreviousPage = computed<boolean>(() => this.page() > 1);

    protected readonly previousPageNumbers = computed<{ from: number; to: number }>(() => {
        const from = (this.page() - 2) * this.pageSize() + 1;
        const to = (this.page() - 1) * this.pageSize();
        return { from: Math.max(from, 1), to: Math.min(to, this.items().length) };
    });

    protected readonly hasNextPage = computed<boolean>(() => this.page() * this.pageSize() < this.items().length);

    protected readonly nextPageNumbers = computed<{ from: number; to: number }>(() => {
        const from = this.page() * this.pageSize() + 1;
        const to = (this.page() + 1) * this.pageSize();
        return { from: Math.min(from, this.items().length), to: Math.min(to, this.items().length) };
    });

    protected goToPreviousPage(): void {
        if (this.hasPreviousPage()) {
            this.page.update((value) => value - 1);
        }
    }

    protected goToNextPage(): void {
        if (this.hasNextPage()) {
            this.page.update((value) => value + 1);
        }
    }
}
