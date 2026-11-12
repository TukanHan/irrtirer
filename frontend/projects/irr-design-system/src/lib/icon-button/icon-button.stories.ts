import { MatIcon } from '@angular/material/icon';
import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { IdsIconButton } from './icon-button';

type IconButtonLayout = 'Icon' | 'Text' | 'Icon & Text';
type IdsIconButtonStoryArgs = IdsIconButton & { layout: IconButtonLayout; iconName: string; text: string };

const meta: Meta<IdsIconButtonStoryArgs> = {
    title: 'Design System/Buttons/Icon',
    component: IdsIconButton,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [MatIcon],
        }),
    ],
    argTypes: {
        disabled: { control: 'boolean', table: { category: 'Inputs' } },
        clicked: { action: 'clicked', table: { category: 'Outputs' } },
        variant: {
            control: 'inline-radio',
            options: ['accent', 'neutral', 'danger'],
            table: { category: 'Inputs' },
        },
        layout: {
            control: 'inline-radio',
            options: ['Icon', 'Text', 'Icon & Text'],
            table: { category: 'Playground' },
        },
        iconName: {
            control: 'text',
            if: { arg: 'layout', neq: 'Text' },
            table: { category: 'Playground' },
        },
        text: {
            control: 'text',
            if: { arg: 'layout', neq: 'Icon' },
            table: { category: 'Playground' },
        },
        type: {
            control: 'inline-radio',
            options: ['button', 'submit', 'reset'],
            table: { category: 'Inputs' },
        },
    },
};

export default meta;
type Story = StoryObj<IdsIconButtonStoryArgs>;

export const Default: Story = {
    args: {
        layout: 'Icon',
        disabled: false,
        iconName: 'edit',
        text: 'Edytuj',
        variant: 'neutral',
        type: 'button',
    },
    render: (args) => ({
        props: args,
        template: `
            <ids-icon-button [disabled]="disabled" [variant]="variant" [type]="type" (clicked)="clicked($event)">
                @if (layout !== 'Text') {
                    <mat-icon class="material-symbols-outlined">{{ iconName }}</mat-icon>
                }
                @if (layout !== 'Icon') {
                    {{ text }}
                }
            </ids-icon-button>
        `,
    }),
};
