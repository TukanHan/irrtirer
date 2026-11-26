import { MatIcon } from '@angular/material/icon';
import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { type Injector, signal } from '@angular/core';
import { disabled, form, FormField, required } from '@angular/forms/signals';
import { createApplication } from '@angular/platform-browser';
import { IdsError, IdsPrefix, IdsSuffix } from 'irr-design-system/form';
import { pseudoStates, StateMatrix } from 'storybook-doc/state-matrix';
import { elem } from 'storybook-doc/template-builder';
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
            // `disabled` and `required` come from the form, so they are not bound on the element.
            template: elem('ids-number-input')
                .withBinding('formField', 'temperatureForm.temperature')
                .withInput('label', args.label, '')
                .withInput('placeholder', args.placeholder, '')
                .withContent(
                    args.showPrefix &&
                        elem('mat-icon')
                            .withAttribute('idsPrefix')
                            .withClass('material-symbols-outlined')
                            .withAttribute('aria-hidden', 'true')
                            .withContent('thermostat'),
                    args.showSuffix && elem('span').withAttribute('idsSuffix').withContent('℃'),
                    elem('ids-error').withContent(
                        '@for (error of temperatureForm.temperature().errors(); track error.kind) {\n    {{ error.message }}\n}',
                    ),
                )
                .build(),
        };
    },
};

export const States: Story = {
    decorators: [moduleMetadata({ imports: [StateMatrix] })],
    parameters: {
        controls: { disable: true },
        pseudo: pseudoStates('.input'),
    },
    render: () => ({
        props: {
            sections: [
                { name: 'valid', invalid: false, disabled: false },
                { name: 'invalid', invalid: true, disabled: false },
                { name: 'disabled', invalid: false, disabled: true },
            ],
            states: ['rest', 'hover', 'focus'],
        },
        template: `
            <sb-state-matrix [sections]="sections" [states]="states">
                <ng-template let-section let-state="state">
                    <ids-number-input
                        [label]="state"
                        [value]="23"
                        [invalid]="section.invalid"
                        [touched]="section.invalid"
                        [disabled]="section.disabled"
                    />
                </ng-template>
            </sb-state-matrix>
        `,
    }),
};
