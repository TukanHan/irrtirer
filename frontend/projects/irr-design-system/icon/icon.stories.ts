import { inject, provideAppInitializer } from '@angular/core';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { cssPropertyArgTypes } from 'storybook-doc/css-properties';
import { elem } from 'storybook-doc/template-builder';
import { IdsIcon } from './icon';
import { IdsIconRegistry } from './registry/icon-registry';

type IdsIconStoryArgs = IdsIcon & {
    color: string;
    '--ids-icon-size': string;
    '--ids-icon-weight': string;
    '--ids-icon-margin-inline': string;
};

const svgIcons: Record<string, string> = {
    cross: toDataUrl(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 6 18 18M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    ),
    'flag-pl': toDataUrl(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fff" d="M2 5h20v7H2z"/><path fill="#dc143c" d="M2 12h20v7H2z"/></svg>',
    ),
};

function toDataUrl(svg: string): string {
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const meta: Meta<IdsIconStoryArgs> = {
    title: 'Design System/Icon',
    component: IdsIcon,
    tags: ['autodocs'],
    decorators: [
        applicationConfig({
            providers: [
                provideAppInitializer(() => {
                    const registry = inject(IdsIconRegistry);
                    for (const [name, url] of Object.entries(svgIcons)) {
                        registry.register(name, url);
                    }
                }),
            ],
        }),
    ],
    argTypes: {
        color: {
            description: 'Text color of the host; font icons and `currentColor` SVGs inherit it.',
            control: 'color',
            table: { category: 'playground' },
        },
        name: { control: 'text', if: { arg: 'svg', truthy: false } },
        svg: {
            control: { type: 'inline-radio', labels: { null: 'none' } },
            options: [null, ...Object.keys(svgIcons)],
        },
        ...cssPropertyArgTypes({
            '--ids-icon-size': {
                description: 'Width, height and font size of the icon. By default, the line height of the surrounding text.',
                syntax: '<length>',
                defaultValue: '1lh',
            },
            '--ids-icon-weight': {
                description: 'Stroke weight of a font icon, from 100 to 700.',
                syntax: '<number>',
                defaultValue: '200',
            },
            '--ids-icon-margin-inline': {
                description: 'Inline margin of the icon. By default, `0`; buttons and links use a negative one to pull the icon towards their edge.',
                syntax: '<length>',
                defaultValue: '0',
            },
        }),
    },
};

export default meta;
type Story = StoryObj<IdsIconStoryArgs>;

export const Default: Story = {
    args: {
        color: '',
        name: 'home',
        svg: undefined,
        '--ids-icon-size': '',
        '--ids-icon-weight': '',
        '--ids-icon-margin-inline': '',
    },
    render: (args) => ({
        props: args,
        template: elem('ids-icon')
            .withStyle('--ids-icon-size', args['--ids-icon-size'])
            .withStyle('--ids-icon-weight', args['--ids-icon-weight'])
            .withStyle('--ids-icon-margin-inline', args['--ids-icon-margin-inline'])
            .withStyle('color', args.color)
            .withInput('name', args.svg ? undefined : args.name)
            .withInput('svg', args.svg)
            .build(),
    }),
};
