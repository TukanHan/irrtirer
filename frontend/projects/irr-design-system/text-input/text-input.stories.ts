import { MatIcon } from '@angular/material/icon';
import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { Component, effect, input, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { IdsError } from 'irr-design-system/form';
import { IdsFlatButton } from 'irr-design-system/action';
import { IdsTextInput } from './text-input';

type TextInputStoryArgs = IdsTextInput & {
    showPrefix: boolean;
    showSuffix: boolean;
};

@Component({
    selector: 'ids-text-input-story',
    imports: [IdsTextInput, IdsFlatButton, MatIcon, FormField, IdsError],
    template: `
        <ids-text-input [formField]="form.value" [label]="label()" [placeholder]="placeholder()" [disabled]="disabled()">
            @if (showPrefix()) {
                <mat-icon idsPrefix class="material-symbols-outlined" aria-hidden="true">search</mat-icon>
            }
            @if (showSuffix()) {
                <ids-flat-button idsSuffix class="ids-flat-button--size-small" (clicked)="model.set({ value: '' })">
                    <mat-icon class="material-symbols-outlined">close</mat-icon>
                </ids-flat-button>
            }
            <ids-error>
                @for (err of form.value().errors(); track err.kind) {
                    {{ err.message }}
                }
            </ids-error>
        </ids-text-input>
    `,
})
class TextInputStoryComponent {
    public readonly value = input('');
    public readonly label = input('');
    public readonly placeholder = input('');
    public readonly disabled = input(false);
    public readonly required = input(false);
    public readonly showPrefix = input(false);
    public readonly showSuffix = input(false);

    protected readonly model = signal({ value: '' });
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

const meta: Meta<TextInputStoryArgs> = {
    title: 'Design System/Text Input',
    component: IdsTextInput,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [TextInputStoryComponent],
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
            <ids-text-input-story
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
