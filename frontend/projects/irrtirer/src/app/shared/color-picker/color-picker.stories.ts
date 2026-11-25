import type { Meta, StoryObj } from '@storybook/angular';
import { ColorPicker } from './color-picker';

const meta: Meta<ColorPicker> = {
    title: 'Komponenty/Color Picker',
    component: ColorPicker,
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
        label: { control: 'text' },
        value: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<ColorPicker>;

export const Default: Story = {
    args: {
        disabled: false,
        label: 'Wybierz kolor',
        value: '#2c96d3',
    },
};
