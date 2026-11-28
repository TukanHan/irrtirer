import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { action } from 'storybook/actions';
import { IdsFramedButton } from 'irr-design-system/action';
import { IdsIcon } from 'irr-design-system/icon';
import { cssPropertyArgTypes } from 'storybook-doc/css-properties';
import { pseudoStates, StateMatrix } from 'storybook-doc/state-matrix';
import { elem } from 'storybook-doc/template-builder';
import { IdsMenu } from './menu';
import { IdsMenuItem } from './menu-item/menu-item';
import { IdsMenuTrigger } from './menu-trigger/menu-trigger';

type IdsMenuStoryArgs = IdsMenu & {
    '--ids-menu-padding': string;
};

const meta: Meta<IdsMenuStoryArgs> = {
    title: 'Design System/Menu',
    component: IdsMenu,
    subcomponents: { IdsMenuTrigger, IdsMenuItem },
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [IdsFramedButton, IdsMenuTrigger, IdsMenuItem, IdsIcon],
        }),
    ],
    argTypes: {
        isOpen: { control: false, table: { defaultValue: { summary: 'false' } } },
        close: { control: false },
        ...cssPropertyArgTypes({
            '--ids-menu-padding': {
                description: 'Padding of the panel. Set it on the `panelClass` class: the panel is rendered outside `ids-menu`.',
                syntax: '<length>',
                defaultValue: '0.25rem 0.25rem',
                control: false,
            },
        }),
    },
};

export default meta;
type Story = StoryObj<IdsMenuStoryArgs>;

export const Default: Story = {
    render: (args) => ({
        props: { ...args, clicked: action('clicked') },
        template: [
            elem('ids-framed-button').withBinding('idsMenuTriggerFor', 'menu').withContent('Aldoria').build(),
            elem('ids-menu')
                .withAttribute('#menu')
                .withInput('panelClass', args.panelClass, '')
                .withContent(
                    elem('ids-menu-item').withOutput('clicked').withContent('Velmora'),
                    elem('ids-menu-item')
                        .withOutput('clicked')
                        .withContent(elem('ids-icon').withInput('name', 'castle', ''), 'Kharzun'),
                    elem('ids-menu-item').withInput('disabled', true, false).withOutput('clicked').withContent('Ostravel'),
                )
                .build(),
        ].join('\n'),
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
            sections: [{ name: 'default' }],
            states: ['rest', 'hover', 'focus-visible', 'active', 'disabled'],
        },
        // `role="menu"` gives each `menuitem` its required parent; the real panel lives in an overlay the matrix cannot hold.
        template: `
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <div role="menu" [attr.aria-label]="state">
                        <ids-menu-item [disabled]="state === 'disabled'">{{ state }}</ids-menu-item>
                    </div>
                </ng-template>
            </sb-state-matrix>
        `,
    }),
};
