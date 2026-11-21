import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { IdsFlatButton } from '../flat-button/flat-button';
import { IdsTooltipDirective, type IdsTooltipPosition } from './tooltip.directive';
import { IdsTooltipPanel } from './tooltip-panel';

type TooltipPlaygroundArgs = {
    idsTooltip: string;
    idsTooltipPosition: IdsTooltipPosition;
    buttonPosition: 'left' | 'center' | 'right';
};

const meta: Meta<TooltipPlaygroundArgs> = {
    title: 'Design System/Tooltip',
    component: IdsTooltipDirective,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [IdsFlatButton, IdsTooltipDirective, IdsTooltipPanel],
        }),
    ],
    argTypes: {
        idsTooltip: {
            control: 'text',
            description: 'Treść wyświetlana w panelu tooltipa.',
            table: { category: 'Inputs' },
        },
        idsTooltipPosition: {
            control: 'inline-radio',
            options: ['auto', 'top', 'right', 'bottom', 'left'],
            description: 'Preferowana pozycja tooltipa. W trybie auto pozycja jest dobrana względem krawędzi viewportu.',
            table: { category: 'Inputs' },
        },
        buttonPosition: {
            control: 'inline-radio',
            options: ['left', 'center', 'right'],
            description: 'Położenie przycisku, które pozwala przetestować zachowanie trybu auto.',
            table: { category: 'Playground' },
        },
    },
};

export default meta;
type Story = StoryObj<TooltipPlaygroundArgs>;

export const Default: Story = {
    args: {
        buttonPosition: 'center',
        idsTooltip: 'Przykładowy tooltip',
        idsTooltipPosition: 'auto',
    },
    render: (args) => ({
        props: args,
        template: `
            <div
                class="tooltip-playground"
                [class.tooltip-playground--left]="buttonPosition === 'left'"
                [class.tooltip-playground--right]="buttonPosition === 'right'"
            >
                <ids-flat-button
                    [idsTooltip]="idsTooltip"
                    [idsTooltipPosition]="idsTooltipPosition"
                >
                    Lorem Ipsum
                </ids-flat-button>
            </div>
        `,
        styles: [
            `
                .tooltip-playground {
                    display: flex;
                    min-height: 240px;
                    align-items: center;
                    justify-content: center;
                }

                .tooltip-playground--left {
                    justify-content: flex-start;
                }

                .tooltip-playground--right {
                    justify-content: flex-end;
                }
            `,
        ],
    }),
};
