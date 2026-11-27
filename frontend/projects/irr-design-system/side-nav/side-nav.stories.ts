import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, provideRouter, Router, RouterOutlet, withHashLocation } from '@angular/router';
import { applicationConfig, componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { filter, map } from 'rxjs';
import { pseudoStates, StateMatrix } from 'storybook-doc/state-matrix';
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
    subcomponents: { IdsSideNavItem },
    tags: ['autodocs'],
    decorators: [
        applicationConfig({
            providers: [provideRouter([{ path: '**', component: SideNavDestinationStory }], withHashLocation())],
        }),
        moduleMetadata({
            imports: [IdsSideNavItem, SideNavDestinationStory, RouterOutlet],
        }),
    ],
};

export default meta;
type Story = StoryObj<IdsSideNav>;

export const Default: Story = {
    decorators: [
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
    args: {
        ariaLabel: 'Lorem ipsum',
    },
    render: (args) => ({
        props: args,
        template: elem('ids-side-nav')
            .withInput('ariaLabel', args.ariaLabel, '')
            .withContent(
                elem('ids-side-nav-item').withInput('link', '/aldoria').withInput('label', 'Aldoria').withInput('icon', 'folder'),
                elem('ids-side-nav-item').withInput('link', '/velmora').withInput('label', 'Velmora').withInput('icon', 'dashboard'),
                elem('ids-side-nav-item').withInput('link', '/kharzun').withInput('label', 'Kharzun').withInput('icon', 'rocket_launch'),
                elem('ids-side-nav-item')
                    .withInput('link', '/ostravel')
                    .withInput('label', 'Ostravel')
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

export const States: Story = {
    decorators: [moduleMetadata({ imports: [StateMatrix] })],
    parameters: {
        controls: { disable: true },
        pseudo: pseudoStates('a'),
    },
    render: () => ({
        props: {
            // The story runs at `/`, so an item linking to `/` is the current page.
            sections: [
                { name: 'default', link: '/lorem', disabled: false },
                { name: 'current', link: '/', disabled: false },
                { name: 'disabled', link: '/lorem', disabled: true },
            ],
            states: ['rest', 'hover', 'focus-visible', 'active'],
        },
        // Items are icon-only, so each cell gets a caption with its state.
        template: `
            <sb-state-matrix [sections]="sections" [states]="states" layout="flow">
                <ng-template let-section let-state="state">
                    <figure class="side-nav-state">
                        <ids-side-nav-item [link]="section.link" [label]="state" [disabled]="section.disabled" icon="folder" />
                        <figcaption>{{ state }}</figcaption>
                    </figure>
                </ng-template>
            </sb-state-matrix>
        `,
        styles: [
            `
            .side-nav-state {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                margin: 0;
                font-size: 0.75rem;
            }
            `,
        ],
    }),
};
