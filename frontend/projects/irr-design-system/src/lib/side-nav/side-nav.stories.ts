import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatIcon } from '@angular/material/icon';
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
            imports: [IdsSideNavItem, MatIcon, SideNavDestinationStory, RouterOutlet],
        }),
    ],
};

export default meta;
type Story = StoryObj<IdsSideNav>;

export const Default: Story = {
    render: () => ({
        template: `
            <div class="side-nav-story">
                <ids-side-nav>
                    <nav aria-label="Przykładowa nawigacja">
                        <ids-side-nav-item link="/project" label="Projekt">
                            <mat-icon class="material-symbols-outlined">folder</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/layers" label="Warstwy">
                            <mat-icon class="material-symbols-outlined">dashboard</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/generating" label="Generowanie">
                            <mat-icon class="material-symbols-outlined">rocket_launch</mat-icon>
                        </ids-side-nav-item>
                        <ids-side-nav-item link="/disabled" label="Zablokowane" [disabled]="true">
                            <mat-icon class="material-symbols-outlined">block</mat-icon>
                        </ids-side-nav-item>
                    </nav>
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

            nav {
                display: flex;
                flex-direction: column;
            }
            `,
        ],
    }),
};
