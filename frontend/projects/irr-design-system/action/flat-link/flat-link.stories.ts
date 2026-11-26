import { MatIcon } from '@angular/material/icon';
import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { NavigationEnd, provideRouter, Router, RouterOutlet, withHashLocation } from '@angular/router';
import { type Meta, type StoryObj, applicationConfig, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { filter, map } from 'rxjs';
import { elem } from 'storybook-doc/template-builder';
import { IdsFlatLink } from './flat-link';

type FlatLinkLayout = 'Icon' | 'Text' | 'Icon & Text';
type IdsFlatLinkStoryArgs = IdsFlatLink & {
    layout: FlatLinkLayout;
    iconName: string;
    text: string;
};

@Component({
    template: `Current location: {{ currentUrl() }}`,
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
            imports: [MatIcon, FlatLinkDestinationStory, RouterOutlet],
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
        link: { control: 'text', table: { category: 'Inputs' } },
        linkType: {
            control: 'inline-radio',
            options: ['internal', 'external'],
            table: { category: 'Inputs' },
        },
        layout: {
            control: 'inline-radio',
            options: ['Icon', 'Text', 'Icon & Text'],
            table: { category: 'Playground' },
        },
        iconName: {
            control: 'text',
            if: { arg: 'layout', neq: 'Text' },
            table: { category: 'Playground' },
        },
        text: {
            control: 'text',
            if: { arg: 'layout', neq: 'Icon' },
            table: { category: 'Playground' },
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
        text: 'Open link',
    },
    render: (args) => ({
        props: args,
        template: elem('ids-flat-link')
            .withInput('link', args.link)
            .withInput('linkType', args.linkType, 'internal')
            .withContent(
                args.layout !== 'Text' && elem('mat-icon').withClass('material-symbols-outlined').withContent(args.iconName),
                args.layout !== 'Icon' && args.text,
            )
            .build(),
    }),
};
