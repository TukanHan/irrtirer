import { Component, inject, input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IdsFlatButton } from 'irr-design-system/action';
import { IdsIcon } from 'irr-design-system/icon';
import { IdsTooltip } from 'irr-design-system/tooltip';
import { Size } from '../../core/models/math/size.interface';
import { SizeDisplayPipe } from '../../core/pipes/size-display.pipe';
import { ActionVisibility, RibbonAction } from './ribbon-action.interface';

@Component({
    selector: 'app-ribbon',
    imports: [IdsIcon, IdsFlatButton, SizeDisplayPipe, IdsTooltip],
    template: `
        @for (action of actions(); track action.iconName) {
            <ids-flat-button
                class="action"
                [hidden]="action.visibility() === 'hidden'"
                [disabled]="action.visibility() === 'disabled'"
                [class.active]="action.visibility() === 'on'"
                (click)="onClick(action)"
                [ariaLabel]="translate.instant(action.tooltipKey)"
                [idsTooltip]="translate.instant(action.tooltipKey)"
                idsTooltipPosition="bottom"
            >
                <ids-icon [name]="action.iconName" />
            </ids-flat-button>
        }

        <span class="size-display">{{ viewportSize() | sizeDisplay }}</span>
    `,
    styleUrl: './ribbon.scss',
})
export class Ribbon {
    public readonly viewportSize = input.required<Size>();

    public readonly actions = input.required<RibbonAction[]>();

    protected readonly translate = inject(TranslateService);

    protected onClick(action: RibbonAction): void {
        if (this.isActive(action.visibility())) {
            action.onClick();
        }
    }

    private isActive(action: ActionVisibility): boolean {
        return action === 'off' || action === 'on';
    }
}
