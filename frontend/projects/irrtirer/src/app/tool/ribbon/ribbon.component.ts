
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ActionVisibility, RibbonAction } from './ribbon-action.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SizeDisplayPipe } from '../../core/pipes/size-display.pipe';
import { Size } from '../../core/models/math/size.interface';
import { MatTooltip } from '@angular/material/tooltip';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-ribbon',
    imports: [MatIconModule, MatButtonModule, SizeDisplayPipe, MatTooltip],
    templateUrl: './ribbon.component.html',
    styleUrl: './ribbon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
