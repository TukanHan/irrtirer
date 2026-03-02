import { Meta, StoryObj } from '@storybook/angular';

interface ExpandablePanelStoryProps {
    selected: boolean;
    content: string;
};

const meta: Meta<ExpandablePanelStoryProps> = {
    title: 'Style/Atomy/List Item Box',
    argTypes: {
        content: {
            control: 'text',
            description: 'Treść elementu w przykładzie',
            table: {
                category: 'Content',
            }
        },
        selected: {
            control: 'boolean',
            description: 'Czy element jest zaznaczony',
            table: {
                category: 'Class',
            }
        },
    },
    globals: { locale: 'pl' },
};

export default meta;
type Story = StoryObj<ExpandablePanelStoryProps>;

export const Example: Story = {
    args: {
        content: 'text',
        selected: false,
    },
    render: (args) => ({
        props: args,
        template: `
            <div class="list-item-box" [class.selected]="selected">
                {{ content }}
            </div>
        `,
    }),
};
