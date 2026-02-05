import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ScrollableListComponent } from './scrollable-list.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-dummy-item',
    template: `<ng-content />`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
        @use "./../../../styles/utils/list-item-box.scss" as *;
        :host {
            @include list-item-box();
        }
    `]
})
class DummyItemComponent {}

const meta: Meta<ScrollableListComponent<string>> = {
    title: 'Komponenty/Scrollable List',
    component: ScrollableListComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({ imports: [DummyItemComponent]}),
    ],
};

export default meta;
type Story = StoryObj<ScrollableListComponent<string>>;

export const Default: Story = {
    args: {
        items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
        pageSize: 5
    },
    render: (args) => ({
        props: args,
        template: `
            <app-scrollable-list [items]="items" [pageSize]="pageSize">
                <ng-template #element let-item>
                    <app-dummy-item>{{ item }}</app-dummy-item>
                </ng-template>
            </app-scrollable-list>
        `,
    })
};
