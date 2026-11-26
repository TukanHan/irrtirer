import { applicationConfig, componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component, inject } from '@angular/core';
import { NavigationEnd, provideRouter, Router, RouterOutlet, withHashLocation } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { elem } from 'storybook-doc/template-builder';
import { IdsSideNav } from './side-nav';
import { IdsSideNavItem } from './side-nav-item/side-nav-item';

@Component({
    template: `{{ currentUrl() }}`,
    styles: `
        :host {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    `,
})
class SideNavDestinationStory {
    private readonly router = inject(Router);

    protected readonly currentUrl = toSignal(
        this.router.events.pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd),
            map((event) => event.urlAfterRedirects),
        ),
        { initialValue: this.router.url },
    );
}

const meta: Meta<IdsSideNav> = {
    title: 'Design System/Side Nav',
    component: IdsSideNav,
    tags: ['autodocs'],
    decorators: [
        applicationConfig({
            providers: [provideRouter([{ path: '**', component: SideNavDestinationStory }], withHashLocation())],
        }),
        moduleMetadata({
            imports: [IdsSideNavItem, SideNavDestinationStory, RouterOutlet],
        }),
        // The layout and router outlet only show where an item navigates, so they stay out of the code snippet.
        componentWrapperDecorator(
            (story) => `
                <div class="side-nav-story">
                    ${story}
                    <router-outlet />
                </div>
            `,
        ),
    ],
    parameters: {
        docs: { source: { excludeDecorators: true } },
    },
};

export default meta;
type Story = StoryObj<IdsSideNav>;

export const Default: Story = {
    argTypes: {
        ariaLabel: { control: 'text', table: { category: 'Inputs' } },
    },
    args: {
        ariaLabel: 'Lorem ipsum',
    },
    render: (args) => ({
        props: args,
        template: elem('ids-side-nav')
            .withInput('ariaLabel', args.ariaLabel, '')
            .withContent(
                elem('ids-side-nav-item').withInput('link', '/project').withInput('label', 'Projekt').withInput('icon', 'folder'),
                elem('ids-side-nav-item').withInput('link', '/layers').withInput('label', 'Warstwy').withInput('icon', 'dashboard'),
                elem('ids-side-nav-item').withInput('link', '/generating').withInput('label', 'Generowanie').withInput('icon', 'rocket_launch'),
                elem('ids-side-nav-item')
                    .withInput('link', '/disabled')
                    .withInput('label', 'Zablokowane')
                    .withInput('disabled', true)
                    .withInput('icon', 'block'),
            )
            .build(),
        styles: [
            `
            .side-nav-story {
                display: flex;
                height: 320px;
            }
            `,
        ],
    }),
};
