import { Meta, StoryObj } from '@storybook/angular';

interface LoadingDotsStoryProps {
    phrase: string;
    loadingDotsDuration: number;
};

const meta: Meta<LoadingDotsStoryProps> = {
    title: 'Style/Animacje/Loading Dots',
    argTypes: {
        phrase: {
            control: 'text',
            description: 'Tekst, po którym będą pojawiać się kropki',
            table: { 
                category: 'Content',
            },
        },
        loadingDotsDuration: {
            name: '--loading-dots-duration',
            control: 'number',
            description: 'Czas trwania animacji kropek w sekundach',
            table: {
                defaultValue: { summary: '2s' },
                category: 'CSS Variable',
            },
        },
    },
    parameters: { backgrounds: { disable: true } },
    globals: { theme: 'light', locale: 'pl' },
};

export default meta;
type Story = StoryObj<LoadingDotsStoryProps>;

export const Example: Story = {
    args: {
        phrase: 'Ładowanie',
        loadingDotsDuration: 2,
    },
    render: (args) => ({
        props: args,
        template: `
            <span class="loading-dots" style="--loading-dots-duration: ${args.loadingDotsDuration}s">${args.phrase}</span>
        `,
    })
};
