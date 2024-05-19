import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActiveCanvasComponent } from '../../shared/active-canvas/active-canvas.component';
import { Store } from '@ngrx/store';
import { selectMosaicConfig } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Vector } from '../../core/models/point.model';
import { MosaicConfig } from '../../core/models/mosaic-project.model';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ImageObject } from '../../shared/active-canvas/canvas-objects/image-object';
import { GridObject } from '../../shared/active-canvas/canvas-objects/grid-object';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sectors',
    standalone: true,
    imports: [ActiveCanvasComponent, MatButtonToggleModule, MatIconModule, FormsModule, CommonModule],
    templateUrl: './sectors.component.html',
    styleUrl: './sectors.component.scss',
})
export class SectorsComponent implements AfterViewInit {
    canvasMode: 'movement' | 'selection' = 'movement';

    @ViewChild('activeCanvas')
    activeCanvas: ActiveCanvasComponent;

    constructor(private store: Store) {}

    async ngAfterViewInit(): Promise<void> {
        const mosaicConfig: MosaicConfig = this.store.selectSignal(selectMosaicConfig)();
        const image = new Image();
        image.src = mosaicConfig.base64Image;
        await image.decode();

        this.activeCanvas.addCanvasObject(new GridObject());

        this.activeCanvas.addCanvasObject(
            new ImageObject(image, Vector.zero, {
                height: (image.height / image.width) * mosaicConfig.mosaicWidth,
                width: mosaicConfig.mosaicWidth,
            })
        );

        this.activeCanvas.addCanvasObject(
            new ImageObject(
                image,
                {
                    y: (image.height / image.width) * mosaicConfig.mosaicWidth,
                    x: mosaicConfig.mosaicWidth,
                },
                {
                    height: (image.height / image.width) * mosaicConfig.mosaicWidth,
                    width: mosaicConfig.mosaicWidth,
                }
            )
        );
    }

    canvasOptionChanged(): void {
        this.activeCanvas.options = {
            isMovable: this.canvasMode === 'movement',
        };
    }

    onCanvasClicked(point: Vector): void {
        console.log(point);
    }
}
