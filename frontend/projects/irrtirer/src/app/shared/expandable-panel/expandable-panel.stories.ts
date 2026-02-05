import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ExpandablePanelComponent } from './expandable-panel.component';
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

type ExpandablePanelStoryProps = ExpandablePanelComponent & {
  count: number;
};

const meta: Meta<ExpandablePanelStoryProps> = {
    title: 'Komponenty/Expandable Panel',
    component: ExpandablePanelComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({ imports: [DummyItemComponent]}),
    ],
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
        styles: [`
            .panel {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
        `],
    })
};
