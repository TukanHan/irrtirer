import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, expect, it } from 'vitest';
import { IdsFlatLink } from './flat-link';

@Component({
    imports: [IdsFlatLink],
    template: `
        <ids-flat-link link="/project">
            <span>Project</span>
        </ids-flat-link>
    `,
})
class InternalFlatLinkHost {}

@Component({
    imports: [IdsFlatLink],
    template: `
        <ids-flat-link link="https://example.com" linkType="external">
            <span>External site</span>
        </ids-flat-link>
    `,
})
class ExternalFlatLinkHost {}

describe('IdsFlatLink', () => {
    it('renders an internal route and projects its content', async () => {
        await TestBed.configureTestingModule({
            imports: [InternalFlatLinkHost],
            providers: [provideRouter([])],
        }).compileComponents();

        const fixture: ComponentFixture<InternalFlatLinkHost> = TestBed.createComponent(InternalFlatLinkHost);
        fixture.detectChanges();

        const anchor = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;

        expect(anchor.getAttribute('href')).toBe('/project');
        expect(anchor.textContent.trim()).toBe('Project');
        expect(anchor.hasAttribute('target')).toBe(false);
    });

    it('renders an external href with safe new-tab attributes and projected content', async () => {
        await TestBed.configureTestingModule({
            imports: [ExternalFlatLinkHost],
        }).compileComponents();

        const fixture: ComponentFixture<ExternalFlatLinkHost> = TestBed.createComponent(ExternalFlatLinkHost);
        fixture.detectChanges();

        const anchor = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;

        expect(anchor.getAttribute('href')).toBe('https://example.com');
        expect(anchor.getAttribute('target')).toBe('_blank');
        expect(anchor.getAttribute('rel')).toBe('noopener noreferrer');
        expect(anchor.textContent.trim()).toBe('External site');
        expect(anchor.hasAttribute('routerLink')).toBe(false);
    });
});
