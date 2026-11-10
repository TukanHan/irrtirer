import type { Meta, StoryObj } from '@storybook/angular';
import { IdsButton } from './button';

type IdsButtonArgs = IdsButton & { text: string; hostDisplay: 'flex' | 'block' };

const meta: Meta<IdsButtonArgs> = {
    title: 'Design System/Button',
    component: IdsButton,
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean', table: { category: 'Inputs' } },
        clicked: { action: 'clicked', table: { category: 'Outputs' } },
        variant: {
            control: 'inline-radio',
            options: ['accent', 'neutral', 'danger'],
            table: { category: 'Inputs' },
        },
        type: {
            control: 'inline-radio',
            options: ['button', 'submit', 'reset'],
            table: { category: 'Inputs' },
        },
        text: { control: 'text', table: { category: 'Playground' } },
        hostDisplay: {
            control: 'inline-radio',
            options: ['block', 'flex'],
            table: { category: 'Playground' },
        },
    },
};

export default meta;
type Story = StoryObj<IdsButtonArgs>;

export const Default: Story = {
    args: {
        text: 'Click me',
        disabled: false,
        variant: 'neutral',
        type: 'button',
        hostDisplay: 'block',
    },
    render: (args) => {
        const button = `<ids-button [disabled]="disabled" [variant]="variant" (clicked)="clicked($event)">{{ text }}</ids-button>`;
        const template = args.hostDisplay === 'flex' ? `<div class="resizable-container" style="display: flex;">${button}</div>` : button;

        return {
            props: args,
            template,
            styles: [
                `
                .resizable-container {
                    display: flex;
                    box-sizing: border-box;
                    padding: 12px;
                    overflow: auto;
                    resize: horizontal;
                    align-items: flex-start;
                    border: 2px dashed #7777;
                }
            `,
            ],
        };
    },
};
