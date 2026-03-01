import { Meta, StoryObj } from '@storybook/angular';

interface ExpandablePanelStoryProps {
    selected: boolean;
    content: string;
};

const meta: Meta<ExpandablePanelStoryProps> = {
    title: 'Style/Atomy/List Item Box',
    argTypes: {
        selected: {
            control: 'boolean',
            description: 'Czy element jest zaznaczony',
            category: 'Class',
        },
        content: {
            control: 'text',
            description: 'Treść elementu w przykładzie',
            category: 'Content',
        },
    },
    globals: { locale: 'pl' },
};

export default meta;
type Story = StoryObj<ExpandablePanelStoryProps>;

export const Example: Story = {
    args: {
        selected: false,
        content: 'text',
    },
    render: (args) => {
        return {
            props: args,
            template: `
                <div class="list-item-box" [class.selected]="selected">
                    {{ content }}
                </div>
            `,
        };
    },
};
