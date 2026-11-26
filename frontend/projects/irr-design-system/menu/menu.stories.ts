import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { action } from 'storybook/actions';
import { IdsFramedButton } from 'irr-design-system/action';
import { elem } from 'storybook-doc/template-builder';
import { IdsMenuTrigger } from './menu-trigger/menu-trigger';
import { IdsMenu } from './menu';
import { IdsMenuItem } from './menu-item/menu-item';
import { MatIcon } from '@angular/material/icon';

const meta: Meta<IdsMenu> = {
    title: 'Design System/Menu',
    component: IdsMenu,
    subcomponents: { IdsMenuTrigger, IdsMenuItem },
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [IdsFramedButton, IdsMenuTrigger, IdsMenuItem, MatIcon],
        }),
    ],
    argTypes: {
        isOpen: { control: false, table: { defaultValue: { summary: 'false' } } },
        close: { control: false },
    },
};

export default meta;
type Story = StoryObj<IdsMenu>;

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
                        .withContent(elem('mat-icon').withClass('material-symbols-outlined').withContent('castle'), 'Kharzun'),
                    elem('ids-menu-item').withInput('disabled', true, false).withOutput('clicked').withContent('Ostravel'),
                )
                .build(),
        ].join('\n'),
    }),
};
