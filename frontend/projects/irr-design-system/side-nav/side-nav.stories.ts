import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component, inject } from '@angular/core';
import { NavigationEnd, provideRouter, Router, RouterOutlet, withHashLocation } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
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
    ],
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
        template: `
            <div class="side-nav-story">
                <ids-side-nav [ariaLabel]="ariaLabel">
                    <ids-side-nav-item link="/project" label="Projekt" icon="folder" />
                    <ids-side-nav-item link="/layers" label="Warstwy" icon="dashboard" />
                    <ids-side-nav-item link="/generating" label="Generowanie" icon="rocket_launch" />
                    <ids-side-nav-item link="/disabled" label="Zablokowane" [disabled]="true" icon="block" />
                </ids-side-nav>
                <router-outlet />
            </div>
        `,
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
