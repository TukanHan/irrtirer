import { MatIcon } from '@angular/material/icon';
import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { type Injector, signal } from '@angular/core';
import { disabled, form, FormField, required } from '@angular/forms/signals';
import { createApplication } from '@angular/platform-browser';
import { IdsError, IdsPrefix, IdsSuffix } from 'irr-design-system/form';
import { IdsFlatButton } from 'irr-design-system/action';
import { elem } from 'storybook-doc/template-builder';
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
            // `disabled` and `required` come from the form, so they are not bound on the element.
            template: elem('ids-text-input')
                .withBinding('formField', 'searchForm.query')
                .withInput('label', args.label, '')
                .withInput('placeholder', args.placeholder, '')
                .withContent(
                    args.showPrefix &&
                        elem('mat-icon')
                            .withAttribute('idsPrefix')
                            .withClass('material-symbols-outlined')
                            .withAttribute('aria-hidden', 'true')
                            .withContent('search'),
                    args.showSuffix &&
                        elem('ids-flat-button')
                            .withAttribute('idsSuffix')
                            .withClass('ids-flat-button--size-small')
                            .withOutput('clicked', "searchForm.query().value.set('')")
                            .withContent(elem('mat-icon').withClass('material-symbols-outlined').withContent('close')),
                    elem('ids-error').withContent('@for (error of searchForm.query().errors(); track error.kind) {\n    {{ error.message }}\n}'),
                )
                .build(),
        };
    },
};
