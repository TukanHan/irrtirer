import { type Meta, type StoryObj } from '@storybook/angular';
import { ScrollableListComponent } from './scrollable-list.component';

const meta: Meta<ScrollableListComponent<string>> = {
    title: 'Example/Scrollable List',
    component: ScrollableListComponent,
    tags: ['autodocs'],
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
                    <span class="item">{{ item }}</span>
                </ng-template>
            </app-scrollable-list>
        `,
        styles: [`
            .item {
                padding: 10px 16px;
                border-radius: 4px;
                background: var(--irr-contrast-lightest);
            }
        `]
    })
};
