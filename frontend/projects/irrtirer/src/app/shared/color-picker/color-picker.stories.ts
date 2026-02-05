import type { Meta, StoryObj } from '@storybook/angular';
import { ColorPickerComponent } from './color-picker.component';

const meta: Meta<ColorPickerComponent> = {
    title: 'Komponenty/Color Picker',
    component: ColorPickerComponent,
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
        label: { control: 'text' },
        value: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<ColorPickerComponent>;

export const Default: Story = {
    args: {
        disabled: false,
        label: 'Wybierz kolor',
        value: '#2c96d3'
    },
};
