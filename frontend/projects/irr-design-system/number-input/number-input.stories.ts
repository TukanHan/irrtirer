import { MatIcon } from '@angular/material/icon';
import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { Component, effect, input, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { IdsError, IdsSuffix } from 'irr-design-system/form';
import { IdsNumberInput } from './number-input';

type NumberInputStoryArgs = IdsNumberInput & {
    showPrefix: boolean;
    showSuffix: boolean;
};

@Component({
    selector: 'ids-number-input-story',
    imports: [IdsNumberInput, MatIcon, FormField, IdsError, IdsSuffix],
    template: `
        <ids-number-input [formField]="form.value" [label]="label()" [placeholder]="placeholder()" [disabled]="disabled()">
            @if (showPrefix()) {
                <mat-icon idsPrefix class="material-symbols-outlined" aria-hidden="true">thermostat</mat-icon>
            }
            @if (showSuffix()) {
                <span idsSuffix>℃</span>
            }
            <ids-error>
                @for (err of form.value().errors(); track err.kind) {
                    {{ err.message }}
                }
            </ids-error>
        </ids-number-input>
    `,
})
class NumberInputStoryComponent {
    public readonly value = input(0);
    public readonly label = input('');
    public readonly placeholder = input('');
    public readonly disabled = input(false);
    public readonly required = input(false);
    public readonly showPrefix = input(false);
    public readonly showSuffix = input(false);

    protected readonly model = signal({ value: 0 });
    protected readonly form = form(this.model, (path) => {
        required(path.value, {
            message: 'Pole jest wymagane',
            when: () => this.required(),
        });
    });

    constructor() {
        effect(() => this.model.set({ value: this.value() }));
    }
}

const meta: Meta<NumberInputStoryArgs> = {
    title: 'Design System/Number Input',
    component: IdsNumberInput,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [NumberInputStoryComponent],
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
            control: 'number',
            table: { category: 'Playground' },
        },
        disabled: { control: 'boolean', table: { category: 'Inputs' } },
        required: { control: 'boolean', table: { category: 'Inputs' } },
        showPrefix: { control: 'boolean', table: { category: 'Playground' } },
        showSuffix: { control: 'boolean', table: { category: 'Playground' } },
    },
};

export default meta;
type Story = StoryObj<NumberInputStoryArgs>;

export const Default: Story = {
    args: {
        value: 23,
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
            <ids-number-input-story
                [value]="value"
                [label]="label"
                [placeholder]="placeholder"
                [disabled]="disabled"
                [required]="required"
                [showPrefix]="showPrefix"
                [showSuffix]="showSuffix"
            />
        `,
    }),
};
