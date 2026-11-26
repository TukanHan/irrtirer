import { Component, input } from '@angular/core';

@Component({
    selector: 'ids-tooltip-panel',
    template: `
        <div class="ids-panel ids-tooltip-panel ids-tooltip-label" role="tooltip" [id]="panelId()">
            {{ text() }}
        </div>
    `,
    styleUrls: ['./tooltip-panel.css', '../../styles/shared/ids-panel.css'],
})
export class IdsTooltipPanel {
    public readonly panelId = input.required<string>();
    public readonly text = input.required<string>();
}
