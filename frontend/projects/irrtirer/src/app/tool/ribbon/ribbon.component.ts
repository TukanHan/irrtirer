import { Component, inject, input } from '@angular/core';
import { ActionVisibility, RibbonAction } from './ribbon-action.interface';
import { MatIconModule } from '@angular/material/icon';
import { SizeDisplayPipe } from '../../core/pipes/size-display.pipe';
import { Size } from '../../core/models/math/size.interface';
import { TranslateService } from '@ngx-translate/core';
import { IdsFlatButton, IdsTooltip } from 'irr-design-system';

@Component({
    selector: 'app-ribbon',
    imports: [MatIconModule, IdsFlatButton, SizeDisplayPipe, IdsTooltip],
    templateUrl: './ribbon.component.html',
    styleUrl: './ribbon.component.scss',
})
export class RibbonComponent {
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
