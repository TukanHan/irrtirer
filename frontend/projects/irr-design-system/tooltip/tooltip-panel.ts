import { Component, input } from '@angular/core';

@Component({
    selector: 'ids-tooltip-panel',
    template: `
        <div class="ids-panel ids-tooltip-panel ids-tooltip-label" role="tooltip">
            {{ text() }}
        </div>
    `,
    styleUrls: ['./tooltip-panel.css', '../styles/shared/ids-panel.css'],
})
export class IdsTooltipPanel {
    public readonly text = input.required<string>();
}
