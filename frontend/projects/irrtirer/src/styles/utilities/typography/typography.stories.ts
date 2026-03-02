import { Meta, StoryObj } from '@storybook/angular';

interface TypographyStoryProps {
    phrase: string;
    typography: 'heading-hero' | 'heading-hero-accent' | 'block-label' | 'block-label-sm';
};

const meta: Meta<TypographyStoryProps> = {
    title: 'Style/Typografia',
    argTypes: {
        phrase: {
            control: 'text',
            description: 'Tekst, który będzie wyświetlany jako przykład typografii',
            table: { 
                category: 'Content',
            },
        },
        typography: {
            control: 'radio',
            options: ['heading-hero', 'heading-hero-accent', 'block-label', 'block-label-sm'],
            description: 'Styl typografii do wyświetlenia',
            table: {
                category: 'Class',
            },
        },
    },
    globals: { locale: 'pl' },
};

export default meta;
type Story = StoryObj<TypographyStoryProps>;

export const Example: Story = {
    args: {
        phrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        typography: 'heading-hero',
    },
    render: (args) => ({
        props: args,
        template: `
            <span class="${args.typography}">${args.phrase}</span>
        `,
    })
};

export const HeadingHero: StoryObj = {
    render: () => ({
        template: `<span class="heading-hero">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>`,
    }),
    parameters: { controls: { disable: true }, }
};

export const HeadingHeroAccent: StoryObj = {
    render: () => ({
        template: `<span class="heading-hero-accent">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>`,
    }),
    parameters: { controls: { disable: true }, }
};

export const BlockLabel: StoryObj = {
    render: () => ({
        template: `<span class="block-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>`,
    }),
    parameters: { controls: { disable: true }, }
};

export const BlockLabelSm: StoryObj = {
    render: () => ({
        template: `<span class="block-label-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>`,
    }),
    parameters: { controls: { disable: true }, }
};
