import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    signal,
    ViewChild,
    WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ColorSelectionPanelComponent } from './color-selection-panel/color-selection-panel.component';
import { ColorInstance } from 'color';

@Component({
    selector: 'app-color-picker',
    imports: [CommonModule, OverlayModule, ColorSelectionPanelComponent],
    templateUrl: './color-picker.component.html',
    styleUrl: './color-picker.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent implements OnChanges {
    @Input({required: true})
    color: string = "#000000";

    @Output()
    colorChange: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    label: string = $localize`Kolor`;

    protected colorHexCodeSignal: WritableSignal<string> = signal('black');

    protected isOpenSignal: WritableSignal<boolean> = signal(false);

    @ViewChild('canvas')
    canvas: ElementRef<HTMLCanvasElement>;

    ngOnChanges(): void {
        this.colorHexCodeSignal.set(this.color);
    }

    toggleColorPanel(): void {
        this.isOpenSignal.update(value => !value);
    }

    onColorChanged(color: ColorInstance): void {
        setTimeout(() => {
            this.colorHexCodeSignal.set(color.hex());
            this.colorChange.next(color.hex());
        }, 0);
    }
}
