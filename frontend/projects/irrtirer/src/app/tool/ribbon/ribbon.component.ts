
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ActionVisibility, RibbonAction } from './ribbon-action.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SizeDisplayPipe } from '../../core/pipes/size-display.pipe';
import { Size } from '../../core/models/math/size.interface';

@Component({
    selector: 'app-ribbon',
    imports: [MatIconModule, MatButtonModule, SizeDisplayPipe],
    templateUrl: './ribbon.component.html',
    styleUrl: './ribbon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RibbonComponent {
    public readonly viewportSize = input.required<Size>();

    public readonly actions = input.required<RibbonAction[]>();

    protected onClick(action: RibbonAction): void {
        if (this.isActive(action.visibility())) {
            action.onClick();
        }
    }

    protected isActive(action: ActionVisibility): boolean {
        return action === 'off' || action === 'on';
    }
}
