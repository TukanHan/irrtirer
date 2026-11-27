import { MatIcon } from '@angular/material/icon';
import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { pseudoStates, StateMatrix } from 'storybook-doc/state-matrix';
import { elem } from 'storybook-doc/template-builder';
import { IdsFlatButton } from './flat-button';

type FlatButtonLayout = 'Icon' | 'Text' | 'Icon & Text';
type IdsFlatButtonStoryArgs = IdsFlatButton & {
    layout: FlatButtonLayout;
    iconName: string;
    text: string;
    size: null | 'ids-flat-button--size-small';
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
        layout: {
            description: 'What the button content holds: an icon, text, or both.',
            control: 'inline-radio',
            options: ['Icon', 'Text', 'Icon & Text'],
            table: { category: 'playground' },
        },
        iconName: {
            description: 'Material Symbols name of the projected `mat-icon`.',
            control: 'text',
            if: { arg: 'layout', neq: 'Text' },
            table: { category: 'playground' },
        },
        text: {
            description: 'Projected text.',
            control: 'text',
            if: { arg: 'layout', neq: 'Icon' },
            table: { category: 'playground' },
        },
        size: {
            description: 'Size modifier class on the host; without it the button is 36px.',
            control: { type: 'inline-radio', labels: { null: 'none' } },
            options: [null, 'ids-flat-button--size-small'],
            table: { category: 'class', type: { summary: 'string' } },
        },
        clicked: { control: false },
    },
};

export default meta;
type Story = StoryObj<IdsFlatButtonStoryArgs>;

export const Default: Story = {
    args: {
        layout: 'Icon',
        iconName: 'edit',
        text: 'Lorem',
        size: null,
        ariaLabel: 'Lorem ipsum',
        disabled: false,
        variant: 'neutral',
        type: 'button',
    },
    render: (args) => ({
        props: args,
        template: elem('ids-flat-button')
            .withClass(args.size)
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
            sections: [{ name: 'neutral' }, { name: 'danger' }, { name: 'accent' }],
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
