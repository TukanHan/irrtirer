import { Component, input } from '@angular/core';

@Component({
    selector: 'ids-tooltip-panel',
    template: `
        <div class="ids-panel ids-tooltip-panel ids-type-label-sm" role="tooltip" [class]="panelClass()" [id]="panelId()">
            {{ text() }}
        </div>
    `,
    styleUrls: ['../../styles/shared/ids-panel.css', '../../styles/shared/typography/ids-type-label-sm.css', './tooltip-panel.css'],
})
export class IdsTooltipPanel {
    public readonly panelId = input.required<string>();

    public readonly text = input.required<string>();

    public readonly panelClass = input<string>();
}
