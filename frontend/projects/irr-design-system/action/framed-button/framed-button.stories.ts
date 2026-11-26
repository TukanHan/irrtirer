import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { pseudoStates, StateMatrix } from 'storybook-doc/state-matrix';
import { elem } from 'storybook-doc/template-builder';
import { IdsFramedButton } from './framed-button';

type IdsFramedButtonArgs = IdsFramedButton & { text: string; hostDisplay: 'flex' | 'block' };

const meta: Meta<IdsFramedButtonArgs> = {
    title: 'Design System/Action/Framed Button',
    component: IdsFramedButton,
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean', table: { category: 'Inputs' } },
        ariaLabel: { control: 'text', table: { category: 'Inputs' } },
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
type Story = StoryObj<IdsFramedButtonArgs>;

export const Default: Story = {
    args: {
        text: 'Click me',
        ariaLabel: '',
        disabled: false,
        variant: 'neutral',
        type: 'button',
        hostDisplay: 'block',
    },
    render: (args) => {
        const button = elem('ids-framed-button')
            .withInput('ariaLabel', args.ariaLabel, '')
            .withInput('variant', args.variant, 'neutral')
            .withInput('type', args.type, 'button')
            .withInput('disabled', args.disabled)
            .withOutput('clicked')
            .withContent(args.text);
        const root = args.hostDisplay === 'flex' ? elem('div').withClass('resizable-container').withContent(button) : button;

        return {
            props: args,
            template: root.build(),
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

                    > * {
                        flex: 1 1 auto;
                    }
                }
            `,
            ],
        };
    },
};

export const States: Story = {
    decorators: [moduleMetadata({ imports: [StateMatrix] })],
    parameters: {
        controls: { disable: true },
        pseudo: pseudoStates('button'),
    },
    render: () => ({
        props: {
            sections: [{ name: 'neutral' }, { name: 'accent' }, { name: 'danger' }],
            states: ['rest', 'hover', 'focus-visible', 'active', 'disabled'],
        },
        template: `
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <ids-framed-button [variant]="section.name" [disabled]="state === 'disabled'">{{ state }}</ids-framed-button>
                </ng-template>
            </sb-state-matrix>
        `,
    }),
};
