import { MatIcon } from '@angular/material/icon';
import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { type Injector, signal } from '@angular/core';
import { disabled, form, FormField, required } from '@angular/forms/signals';
import { createApplication } from '@angular/platform-browser';
import { IdsError, IdsPrefix, IdsSuffix } from 'irr-design-system/form';
import { IdsNumberInput } from './number-input';

type NumberInputStoryArgs = IdsNumberInput & {
    showPrefix: boolean;
    showSuffix: boolean;
};

// `form()` needs an injector, but Storybook's render function runs before the story's Angular app exists.
const formsApp = createApplication();

const meta: Meta<NumberInputStoryArgs> = {
    title: 'Design System/Number Input',
    component: IdsNumberInput,
    tags: ['autodocs'],
    loaders: [async () => ({ injector: (await formsApp).injector })],
    decorators: [
        moduleMetadata({
            imports: [MatIcon, FormField, IdsError, IdsPrefix, IdsSuffix],
        }),
    ],
    argTypes: {
        value: { control: 'number', table: { category: 'Playground' } },
        showPrefix: { control: 'boolean', table: { category: 'Playground' } },
        showSuffix: { control: 'boolean', table: { category: 'Playground' } },
        label: { control: 'text', table: { category: 'Inputs' } },
        placeholder: { control: 'text', table: { category: 'Inputs' } },
        disabled: { control: 'boolean', table: { category: 'Inputs' } },
        required: { control: 'boolean', table: { category: 'Inputs' } },
    },
};

export default meta;
type Story = StoryObj<NumberInputStoryArgs>;

export const Default: Story = {
    args: {
        value: 23,
        showPrefix: false,
        showSuffix: false,
        label: 'Label',
        placeholder: 'Lorem ipsum',
        disabled: false,
        required: false,
    },
    render: (args, { loaded }) => {
        const model = signal({ temperature: Number(args.value) });
        const temperatureForm = form(
            model,
            (path) => {
                required(path.temperature, { message: 'Lorem ipsum dolor sit amet', when: () => !!args.required });
                disabled(path.temperature, { when: () => !!args.disabled });
            },
            { injector: loaded['injector'] as Injector },
        );

        return {
            props: { ...args, temperatureForm },
            template: `
                <ids-number-input [formField]="temperatureForm.temperature" [label]="label" [placeholder]="placeholder">
                    @if (showPrefix) {
                        <mat-icon idsPrefix class="material-symbols-outlined" aria-hidden="true">thermostat</mat-icon>
                    }
                    @if (showSuffix) {
                        <span idsSuffix>℃</span>
                    }
                    <ids-error>
                        @for (error of temperatureForm.temperature().errors(); track error.kind) {
                            {{ error.message }}
                        }
                    </ids-error>
                </ids-number-input>
            `,
        };
    },
};
