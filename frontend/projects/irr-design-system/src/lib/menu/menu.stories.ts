import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IdsFramedButton } from '../framed-button/framed-button';
import { IdsMenuTrigger } from './menu-trigger';
import { IdsMenu } from './menu';

const meta: Meta<IdsMenu> = {
    title: 'Design System/Menu',
    component: IdsMenu,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [IdsFramedButton, IdsMenuTrigger],
        }),
    ],
};

export default meta;
type Story = StoryObj<IdsMenu>;

export const Default: Story = {
    render: () => ({
        template: `
            <ids-framed-button idsMenuTrigger [menu]="menu">
                Open menu
            </ids-framed-button>
            <ids-menu #menu>
                <p class="example">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </ids-menu>
        `,
        styles: [`.example { width: 150px; }`],
    }),
};
