import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    ViewChild,
} from '@angular/core';
import { Color } from '../../core/models/color.model';
import { ColorHelper } from '../../core/helpers/color-helper';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ColorSelectionPanelComponent } from './color-selection-panel/color-selection-panel.component';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
    selector: 'app-color-picker',
    standalone: true,
    imports: [CommonModule, OverlayModule, ColorSelectionPanelComponent],
    templateUrl: './color-picker.component.html',
    styleUrl: './color-picker.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent implements OnChanges {
    @Input({required: true})
    color: Color = { r: 0, g: 0, b: 0 };

    @Output()
    colorChange: EventEmitter<Color> = new EventEmitter<Color>();

    @Input()
    label: string = $localize`Kolor`;

    colorHexCode$: Subject<string> = new BehaviorSubject('black');

    isOpen = false;

    @ViewChild('canvas')
    canvas: ElementRef<HTMLCanvasElement>;

    ngOnChanges(): void {
        this.colorHexCode$.next(ColorHelper.rgbToHex(this.color));
    }

    toggleColorPanel(): void {
        this.isOpen = !this.isOpen;
    }

    onColorChanged(color: Color): void {
        setTimeout(() => {
            this.colorHexCode$.next(ColorHelper.rgbToHex(color));
            this.colorChange.next(color);
        }, 0);
    }
}
