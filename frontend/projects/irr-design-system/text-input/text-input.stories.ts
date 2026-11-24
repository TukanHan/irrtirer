import { MatIcon } from '@angular/material/icon';
import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { type Injector, signal } from '@angular/core';
import { disabled, form, FormField, required } from '@angular/forms/signals';
import { createApplication } from '@angular/platform-browser';
import { IdsError, IdsPrefix, IdsSuffix } from 'irr-design-system/form';
import { IdsFlatButton } from 'irr-design-system/action';
import { IdsTextInput } from './text-input';

type TextInputStoryArgs = IdsTextInput & {
    showPrefix: boolean;
    showSuffix: boolean;
};

// `form()` needs an injector, but Storybook's render function runs before the story's Angular app exists.
const formsApp = createApplication();

const meta: Meta<TextInputStoryArgs> = {
    title: 'Design System/Text Input',
    component: IdsTextInput,
    tags: ['autodocs'],
    loaders: [async () => ({ injector: (await formsApp).injector })],
    decorators: [
        moduleMetadata({
            imports: [MatIcon, FormField, IdsError, IdsPrefix, IdsSuffix, IdsFlatButton],
        }),
    ],
    argTypes: {
        value: { control: 'text', table: { category: 'Playground' } },
        showPrefix: { control: 'boolean', table: { category: 'Playground' } },
        showSuffix: { control: 'boolean', table: { category: 'Playground' } },
        label: { control: 'text', table: { category: 'Inputs' } },
        placeholder: { control: 'text', table: { category: 'Inputs' } },
        disabled: { control: 'boolean', table: { category: 'Inputs' } },
        required: { control: 'boolean', table: { category: 'Inputs' } },
    },
};

export default meta;
type Story = StoryObj<TextInputStoryArgs>;

export const Default: Story = {
    args: {
        value: 'Lorem ipsum',
        showPrefix: false,
        showSuffix: false,
        label: 'Label',
        placeholder: 'Dolor sit amet',
        disabled: false,
        required: false,
    },
    render: (args, { loaded }) => {
        const model = signal({ query: String(args.value) });
        const searchForm = form(
            model,
            (path) => {
                required(path.query, { message: 'Lorem ipsum dolor sit amet', when: () => !!args.required });
                disabled(path.query, { when: () => !!args.disabled });
            },
            { injector: loaded['injector'] as Injector },
        );

        return {
            props: { ...args, searchForm },
            template: `
                <ids-text-input [formField]="searchForm.query" [label]="label" [placeholder]="placeholder">
                    @if (showPrefix) {
                        <mat-icon idsPrefix class="material-symbols-outlined" aria-hidden="true">search</mat-icon>
                    }
                    @if (showSuffix) {
                        <ids-flat-button idsSuffix class="ids-flat-button--size-small" (clicked)="searchForm.query().value.set('')">
                            <mat-icon class="material-symbols-outlined">close</mat-icon>
                        </ids-flat-button>
                    }
                    <ids-error>
                        @for (error of searchForm.query().errors(); track error.kind) {
                            {{ error.message }}
                        }
                    </ids-error>
                </ids-text-input>
            `,
        };
    },
};
