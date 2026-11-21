import { Component, input } from '@angular/core';

@Component({
    selector: 'ids-tooltip-panel',
    template: `
        <div class="ids-panel ids-tooltip-panel" role="tooltip">
            {{ text() }}
        </div>
    `,
    styleUrls: ['./tooltip.css', './../styles/shared/ids-panel.css'],
})
export class IdsTooltipPanel {
    public readonly text = input.required<string>();
}
