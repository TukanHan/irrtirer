import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, provideRouter, Router, RouterOutlet, withHashLocation } from '@angular/router';
import { type Meta, type StoryObj, applicationConfig, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { filter, map } from 'rxjs';
import { IdsIcon } from 'irr-design-system/icon';
import { pseudoStates, StateMatrix } from 'storybook-doc/state-matrix';
import { elem } from 'storybook-doc/template-builder';
import { IdsFlatLink } from './flat-link';

type FlatLinkLayout = 'Icon' | 'Text' | 'Icon & Text';
type IdsFlatLinkStoryArgs = IdsFlatLink & {
    layout: FlatLinkLayout;
    iconName: string;
    text: string;
};

@Component({
    template: `<code>{{ currentUrl() }}</code>`,
})
class FlatLinkDestinationStory {
    private readonly router = inject(Router);

    protected readonly currentUrl = toSignal(
        this.router.events.pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd),
            map((event) => event.urlAfterRedirects),
        ),
        { initialValue: this.router.url },
    );
}

const meta: Meta<IdsFlatLinkStoryArgs> = {
    title: 'Design System/Action/Flat Link',
    component: IdsFlatLink,
    tags: ['autodocs'],
    decorators: [
        applicationConfig({
            providers: [provideRouter([{ path: '**', component: FlatLinkDestinationStory }], withHashLocation())],
        }),
        moduleMetadata({
            imports: [IdsIcon, FlatLinkDestinationStory, RouterOutlet],
        }),
        // The router outlet only shows where an internal link navigates, so it stays out of the code snippet.
        componentWrapperDecorator(
            (story) => `
                ${story}
                @if (linkType === 'internal') {
                    <br />
                    <router-outlet />
                }
            `,
        ),
    ],
    parameters: {
        docs: { source: { excludeDecorators: true } },
    },
    argTypes: {
        layout: {
            description: 'What the link content holds: an icon, text, or both.',
            control: 'inline-radio',
            options: ['Icon', 'Text', 'Icon & Text'],
            table: { category: 'playground' },
        },
        iconName: {
            description: 'Material Symbols name of the projected `ids-icon`.',
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
    },
};

export default meta;
type Story = StoryObj<IdsFlatLinkStoryArgs>;

export const Default: Story = {
    args: {
        link: 'https://example.com',
        linkType: 'external',
        layout: 'Icon & Text',
        iconName: 'open_in_new',
        text: 'Lorem ipsum',
    },
    render: (args) => ({
        props: args,
        template: elem('ids-flat-link')
            .withInput('link', args.link)
            .withInput('linkType', args.linkType, 'internal')
            .withContent(args.layout !== 'Text' && elem('ids-icon').withAttribute('name', args.iconName), args.layout !== 'Icon' && args.text)
            .build(),
    }),
};

export const States: Story = {
    decorators: [moduleMetadata({ imports: [StateMatrix] })],
    parameters: {
        controls: { disable: true },
        pseudo: pseudoStates('a'),
    },
    render: () => ({
        props: {
            // The story runs at `/`, so a link to `/` is the current page.
            sections: [
                { name: 'default', link: '/lorem' },
                { name: 'current', link: '/' },
            ],
            states: ['rest', 'hover', 'focus-visible', 'active'],
        },
        template: `
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <ids-flat-link [link]="section.link">
                        <ids-icon name="home" />
                        {{ state }}
                    </ids-flat-link>
                </ng-template>
            </sb-state-matrix>
        `,
    }),
};
