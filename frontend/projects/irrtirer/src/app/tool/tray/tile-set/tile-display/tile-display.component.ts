import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TileModel } from '../../../../core/models/mosaic-project.model';
import { Vector } from '../../../../core/models/math/vector.model';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { PolygonHelper } from '../../../../core/helpers/polygon/polygon-helper';
import { UnitConverter } from '../../../../../../../active-canvas/src/public-api';

@Component({
    selector: 'app-tile-display',
    imports: [MatTooltipModule, MatIconModule],
    templateUrl: './tile-display.component.html',
    styleUrl: './tile-display.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileDisplayComponent implements AfterViewInit {
    @Input()
    tile: TileModel;

    @ViewChild('canvas')
    canvas: ElementRef<HTMLCanvasElement>;

    scale: number;

    ngAfterViewInit(): void {
        const tileOuterRadius = PolygonHelper.calculateOuterRadius(this.tile.vertices);
        const mappedVertices = this.mapVerticesToCanvasPositions(this.tile.vertices, tileOuterRadius);
        this.drawTileOnCanvas(mappedVertices);
        this.scale = this.calculateScale(tileOuterRadius);
    }

    drawTileOnCanvas(mappedVertices: Vector[]): void {
      const ctx = this.canvas.nativeElement.getContext('2d');

      ctx.fillStyle = this.tile.color;
      ctx.beginPath();

      for (let i = 0; i < this.tile.vertices.length; ++i) {
          const canvasPoint = mappedVertices[i];
          if (i == 0) {
              ctx.moveTo(canvasPoint.x, canvasPoint.y);
          } else {
              ctx.lineTo(canvasPoint.x, canvasPoint.y);
          }
      }

      ctx.closePath();
      ctx.fill();
    }

    private mapVerticesToCanvasPositions(vertices: Vector[], tileOuterRadius: number): Vector[] {
        const halfWidth: number = this.canvas.nativeElement.width / 2;
        const halfHeight: number = this.canvas.nativeElement.height / 2;

        const mappedVertices: Vector[] = [];
        for (let i = 0; i < vertices.length; ++i) {
            mappedVertices.push(new Vector(
                halfWidth + (vertices[i].x / tileOuterRadius) * halfWidth,
                halfHeight + (vertices[i].y / tileOuterRadius) * halfHeight,
            ));
        }

        return mappedVertices;
    }

    private calculateScale(tileOuterRadius: number): number {
      const width = this.canvas.nativeElement.width;
      const widthCm = UnitConverter.pxToCm(width);
      return Math.floor(widthCm / tileOuterRadius * 100);
    }
}
