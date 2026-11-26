import { type Meta, type StoryObj, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { IdsFlatButton } from 'irr-design-system/action';
import { elem } from 'storybook-doc/template-builder';
import { IdsTooltip, type IdsTooltipPosition } from './tooltip';

type TooltipStoryArgs = IdsTooltip & {
    buttonPosition: 'left' | 'center' | 'right';
};

const meta: Meta<TooltipStoryArgs> = {
    title: 'Design System/Tooltip',
    component: IdsTooltip,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [IdsFlatButton, IdsTooltip],
        }),
        // The wrapper only moves the button around to test the auto position, so it stays out of the code snippet.
        componentWrapperDecorator(
            (story) => `
                <div
                    class="tooltip-playground"
                    [class.tooltip-playground--left]="buttonPosition === 'left'"
                    [class.tooltip-playground--right]="buttonPosition === 'right'"
                >
                    ${story}
                </div>
            `,
        ),
    ],
    parameters: {
        docs: { source: { excludeDecorators: true } },
    },
    argTypes: {
        buttonPosition: {
            description: 'Moves the host to a viewport edge to show where `auto` places the tooltip.',
            control: 'inline-radio',
            options: ['left', 'center', 'right'],
            table: { category: 'playground' },
        },
        idsTooltipPosition: {
            control: 'inline-radio',
            options: ['auto', 'top', 'right', 'bottom', 'left'] satisfies IdsTooltipPosition[],
        },
    },
};

export default meta;
type Story = StoryObj<TooltipStoryArgs>;

export const Default: Story = {
    args: {
        buttonPosition: 'center',
        idsTooltip: 'Lorem ipsum dolor',
        idsTooltipPosition: 'auto',
    },
    render: (args) => ({
        props: args,
        template: elem('ids-flat-button')
            .withInput('idsTooltip', args.idsTooltip)
            .withInput('idsTooltipPosition', args.idsTooltipPosition, 'auto')
            .withContent('Lorem Ipsum')
            .build(),
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
