import { MatIcon } from '@angular/material/icon';
import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { cssPropertyArgTypes } from 'storybook-doc/css-properties';
import { pseudoStates, StateMatrix } from 'storybook-doc/state-matrix';
import { elem } from 'storybook-doc/template-builder';
import { IdsFlatButton } from './flat-button';

type FlatButtonLayout = 'Icon' | 'Text' | 'Icon & Text';
type IdsFlatButtonStoryArgs = IdsFlatButton & {
    layout: FlatButtonLayout;
    iconName: string;
    text: string;
    '--ids-flat-button-content-color': string;
    '--ids-flat-button-size': string;
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
        clicked: { control: false },
        ...cssPropertyArgTypes({
            '--ids-flat-button-content-color': {
                description: 'Color of the content (text, icon) and its glow; overrides the variant color.',
                syntax: '<color>',
                defaultValue: 'variant color',
            },
            '--ids-flat-button-size': {
                description: 'Width and height of an icon-only button.',
                syntax: '<length>',
                defaultValue: '36px',
            },
        }),
    },
};

export default meta;
type Story = StoryObj<IdsFlatButtonStoryArgs>;

export const Default: Story = {
    args: {
        layout: 'Icon',
        iconName: 'edit',
        text: 'Lorem',
        ariaLabel: 'Lorem ipsum',
        disabled: false,
        variant: 'neutral',
        type: 'button',
        '--ids-flat-button-content-color': '',
        '--ids-flat-button-size': '',
    },
    render: (args) => ({
        props: args,
        template: elem('ids-flat-button')
            .withStyle('--ids-flat-button-content-color', args['--ids-flat-button-content-color'])
            .withStyle('--ids-flat-button-size', args['--ids-flat-button-size'])
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
