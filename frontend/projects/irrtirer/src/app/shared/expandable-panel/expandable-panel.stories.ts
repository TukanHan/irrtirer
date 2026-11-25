import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ExpandablePanel } from './expandable-panel';
import { Component } from '@angular/core';

@Component({
    selector: 'app-dummy-item',
    template: `<ng-content />`,
    host: { class: 'list-item-box' },
})
class DummyItemComponent {}

type ExpandablePanelStoryProps = ExpandablePanel & {
    count: number;
};

const meta: Meta<ExpandablePanelStoryProps> = {
    title: 'Komponenty/Expandable Panel',
    component: ExpandablePanel,
    tags: ['autodocs'],
    decorators: [moduleMetadata({ imports: [DummyItemComponent] })],
};

export default meta;
type Story = StoryObj<ExpandablePanelStoryProps>;

export const Default: Story = {
    args: {
        isOpen: true,
        count: 10,
    },
    render: (args) => ({
        props: args,
        template: `
            <app-expandable-panel class="panel" [isOpen]="isOpen">
                @for (item of [].constructor(${args.count}); track $index) {
                    <app-dummy-item>Item {{ $index + 1 }}</app-dummy-item>
                }
            </app-expandable-panel>
        `,
        styles: [
            `
            .panel {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
        `,
        ],
    }),
};
