import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollableListComponent } from './scrollable-list.component';
import { beforeEach, describe, expect, it } from 'vitest';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

const ITEMS_COUNT = 10;

@Component({
    template: `
        <app-scrollable-list [items]="items" [pageSize]="count">
            <ng-template #element let-item>
                <span class="item">{{ item }}</span>
            </ng-template>
        </app-scrollable-list>
    `,
    imports: [ScrollableListComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class HostComponent {
    protected readonly count = ITEMS_COUNT;
    protected readonly items = Array.from({ length: 120 }, (_, i) => `Item ${i + 1}`);
}

describe('ScrollableListComponent', () => {
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HostComponent, TranslateModule.forRoot({})],
        }).compileComponents();

        fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
    });

    it('should render first page of items', () => {
        const items = fixture.nativeElement.querySelectorAll('.item');
        expect(items.length).toBe(ITEMS_COUNT);
        expect(items[0].textContent).toContain('Item 1');
        expect(items[9].textContent).toContain('Item 10');
    });

    it('should go to next page and render next items', () => {
        const buttonNext = fixture.nativeElement.querySelectorAll('.next');
        expect(buttonNext.length).toBe(1);
        buttonNext[0].click();
        fixture.detectChanges();

        const items = fixture.nativeElement.querySelectorAll('.item');
        expect(items.length).toBe(ITEMS_COUNT);
        expect(items[0].textContent).toContain('Item 11');
        expect(items[9].textContent).toContain('Item 20');
    });
});
