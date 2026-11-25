import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IdsFramedButton } from 'irr-design-system/action';
import { IdsMenuTrigger } from './menu-trigger';
import { IdsMenu } from './menu';
import { IdsMenuItem } from './menu-item/menu-item';
import { MatIcon } from '@angular/material/icon';

const meta: Meta<IdsMenu> = {
    title: 'Design System/Menu',
    component: IdsMenu,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [IdsFramedButton, IdsMenuTrigger, IdsMenuItem, MatIcon],
        }),
    ],
};

export default meta;
type Story = StoryObj<IdsMenu>;

export const Default: Story = {
    render: () => ({
        template: `
            <ids-framed-button [idsMenuTriggerFor]="menu">
                Open menu
            </ids-framed-button>
            <ids-menu #menu>
                <ids-menu-item>View details</ids-menu-item>
                <ids-menu-item><mat-icon class="material-symbols-outlined">draw</mat-icon>Rename</ids-menu-item>
                <ids-menu-item [disabled]="true">Archive</ids-menu-item>
            </ids-menu>
        `,
    }),
};
