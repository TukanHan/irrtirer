import { MatIcon } from '@angular/material/icon';
import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { pseudoStates, StateMatrix } from 'storybook-doc/state-matrix';
import { elem } from 'storybook-doc/template-builder';
import { IdsFlatButton } from './flat-button';

type FlatButtonLayout = 'Icon' | 'Text' | 'Icon & Text';
type IdsFlatButtonStoryArgs = IdsFlatButton & {
    layout: FlatButtonLayout;
    iconName: string;
    className: null | 'ids-flat-button--size-small';
    text: string;
};

const meta: Meta<IdsFlatButtonStoryArgs> = {
    title: 'Design System/Action/Flat Button',
    component: IdsFlatButton,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [MatIcon],
        }),
    ],
    argTypes: {
        disabled: { control: 'boolean', table: { category: 'Inputs' } },
        ariaLabel: { control: 'text', table: { category: 'Inputs' } },
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
        className: {
            control: {
                type: 'select',
                labels: {
                    null: 'Brak klasy',
                    'ids-flat-button--size-small': 'Mały (32px)',
                },
            },
            options: [null, 'ids-flat-button--size-small'],
            table: { category: 'Class' },
        },
    },
};

export default meta;
type Story = StoryObj<IdsFlatButtonStoryArgs>;

export const Default: Story = {
    args: {
        layout: 'Icon',
        ariaLabel: 'Lorem ipsum',
        disabled: false,
        iconName: 'edit',
        text: 'Edytuj',
        variant: 'neutral',
        type: 'button',
        className: null,
    },
    render: (args) => ({
        props: args,
        template: elem('ids-flat-button')
            .withClass(args.className)
            .withInput('ariaLabel', args.ariaLabel, '')
            .withInput('variant', args.variant, 'neutral')
            .withInput('type', args.type, 'button')
            .withInput('disabled', args.disabled)
            .withOutput('clicked')
            .withContent(
                args.layout !== 'Text' && elem('mat-icon').withClass('material-symbols-outlined').withContent(args.iconName),
                args.layout !== 'Icon' && args.text,
            )
            .build(),
    }),
};

export const States: Story = {
    decorators: [moduleMetadata({ imports: [StateMatrix] })],
    parameters: {
        controls: { disable: true },
        pseudo: pseudoStates('button'),
    },
    render: () => ({
        props: {
            sections: [{ name: 'neutral' }, { name: 'accent' }, { name: 'danger' }],
            states: ['rest', 'hover', 'focus-visible', 'active', 'disabled'],
        },
        template: `
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <ids-flat-button [variant]="section.name" [disabled]="state === 'disabled'">
                        <mat-icon class="material-symbols-outlined">edit</mat-icon>
                        {{ state }}
                    </ids-flat-button>
                </ng-template>
            </sb-state-matrix>
        `,
    }),
};
