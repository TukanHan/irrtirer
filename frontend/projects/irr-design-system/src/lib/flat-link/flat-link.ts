import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'ids-flat-link',
    imports: [NgTemplateOutlet, RouterLink, RouterLinkActive],
    template: `
        <ng-template #linkContent>
            <span class="ids-flat-action-content ids-button-label">
                <ng-content />
            </span>
        </ng-template>

        @if (linkType() === 'external') {
            <a class="ids-flat-action ids-flat-link" [href]="link()" target="_blank" rel="noopener noreferrer">
                <ng-container [ngTemplateOutlet]="linkContent" />
            </a>
        } @else {
            <a class="ids-flat-action ids-flat-link" [routerLink]="link()" routerLinkActive="ids-active-link">
                <ng-container [ngTemplateOutlet]="linkContent" />
            </a>
        }
    `,
    styleUrls: ['./flat-link.css', './../styles/shared/ids-flat-action.css', './../styles/shared/ids-action.css'],
})
export class IdsFlatLink {
    public readonly link = input.required<string>();
    public readonly linkType = input<'internal' | 'external'>('internal');
}
