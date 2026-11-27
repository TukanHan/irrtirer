import { Component } from '@angular/core';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ScrollableList } from './scrollable-list';

@Component({
    selector: 'app-dummy-item',
    template: `<ng-content />`,
    host: { class: 'list-item-box' },
})
class DummyItemComponent {}

const meta: Meta<ScrollableList<string>> = {
    title: 'Komponenty/Scrollable List',
    component: ScrollableList,
    tags: ['autodocs'],
    decorators: [moduleMetadata({ imports: [DummyItemComponent] })],
};

export default meta;
type Story = StoryObj<ScrollableList<string>>;

export const Default: Story = {
    args: {
        items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
        pageSize: 5,
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
    }),
};
