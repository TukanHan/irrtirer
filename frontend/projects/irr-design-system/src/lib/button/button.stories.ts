import type { Meta, StoryObj } from '@storybook/angular';
import { IdsButton } from './button';

const meta: Meta<IdsButton> = {
    title: 'Design System/Button',
    component: IdsButton,
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
        clicked: { action: 'clicked' },
        variant: {
            control: { type: 'select' },
            options: ['accent', 'neutral', 'danger'],
        },
        type: {
            control: { type: 'select' },
            options: ['button', 'submit', 'reset'],
        },
    },
};

export default meta;
type Story = StoryObj<IdsButton>;

export const Default: Story = {
    args: {
        disabled: false,
        variant: 'neutral',
    },
    render: (args) => ({
        props: args,
        template: `
            <ids-button [disabled]="disabled" [variant]="variant" (clicked)="clicked()">Click me</ids-button>
        `,
    }),
};
