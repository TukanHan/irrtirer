import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { RibbonAction } from './ribbon-action.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-ribbon',
    imports: [CommonModule, MatIconModule, MatButtonModule],
    templateUrl: './ribbon.component.html',
    styleUrl: './ribbon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RibbonComponent {
    public zoom: InputSignal<number> = input.required();
    public actions: InputSignal<RibbonAction[]> = input.required();
}
