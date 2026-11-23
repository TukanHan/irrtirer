import { MatIcon } from '@angular/material/icon';
import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { IdsFlatButton } from 'irr-design-system/action';
import { IdsTextInput } from './text-input';

type TextInputStoryArgs = IdsTextInput & {
    showPrefix: boolean;
    showSuffix: boolean;
};

const meta: Meta<TextInputStoryArgs> = {
    title: 'Design System/Text Input',
    component: IdsTextInput,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [IdsTextInput, IdsFlatButton, MatIcon],
        }),
    ],
    argTypes: {
        label: {
            control: 'text',
            table: { category: 'Inputs' },
        },
        placeholder: {
            control: 'text',
            table: { category: 'Inputs' },
        },
        value: {
            control: 'text',
            table: { category: 'Playground' },
        },
        disabled: { control: 'boolean', table: { category: 'Inputs' } },
        required: { control: 'boolean', table: { category: 'Inputs' } },
        showPrefix: { control: 'boolean', table: { category: 'Playground' } },
        showSuffix: { control: 'boolean', table: { category: 'Playground' } },
    },
};

export default meta;
type Story = StoryObj<TextInputStoryArgs>;

export const Default: Story = {
    args: {
        value: 'Example',
        label: 'Label',
        placeholder: 'Lorem Ipsum',
        disabled: false,
        required: false,
        showPrefix: false,
        showSuffix: false,
    },
    render: (args) => ({
        props: args,
        template: `
            <ids-text-input
                [(value)]="value"
                [label]="label"
                [placeholder]="placeholder"
                [disabled]="disabled"
                [required]="required"
            >
                @if (showPrefix) {
                    <mat-icon idsPrefix class="material-symbols-outlined" aria-hidden="true">search</mat-icon>
                }
                @if (showSuffix) {
                    <ids-flat-button idsSuffix class="ids-flat-button--size-small" (clicked)="value = ''">
                        <mat-icon class="material-symbols-outlined">close</mat-icon>
                    </ids-flat-button>
                }
            </ids-text-input>
        `,
    }),
};
