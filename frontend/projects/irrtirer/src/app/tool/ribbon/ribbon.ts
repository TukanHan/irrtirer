import { Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';
import { IdsFlatButton } from 'irr-design-system/action';
import { IdsTooltip } from 'irr-design-system/tooltip';
import { Size } from '../../core/models/math/size.interface';
import { SizeDisplayPipe } from '../../core/pipes/size-display.pipe';
import { ActionVisibility, RibbonAction } from './ribbon-action.interface';

@Component({
    selector: 'app-ribbon',
    imports: [MatIconModule, IdsFlatButton, SizeDisplayPipe, IdsTooltip],
    templateUrl: './ribbon.html',
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
