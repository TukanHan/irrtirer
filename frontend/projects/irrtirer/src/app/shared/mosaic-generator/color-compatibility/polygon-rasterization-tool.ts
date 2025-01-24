//Based on https://alienryderflex.com/polygon_fill/
import { Rect } from '../../../core/models/rect.model';
import { Size } from '../../../core/models/size.interface';
import { Vector } from '../../../core/models/vector.model';

export class PolygonRasterizationTool {
    private imageLeftBorder: number = 0;

    private readonly imageSize: Size;
    private readonly imagePosition: Rect;

    public constructor(imagePosition: Rect, imageSize: Size) {
        this.imagePosition = imagePosition;
        this.imageSize = imageSize;
    }

    public rasterizePolygonInRange(vertices: Vector[]): boolean[] {
        const verticesInPixelSpace: Vector[] = this.translateVerticesToPixelSpace(vertices);
        return this.prepareMask(verticesInPixelSpace, this.imageSize);
    }

    private translateVerticesToPixelSpace(vertices: Vector[]): Vector[] {
        const translated: Vector[] = new Array(vertices.length);
        for (let i = 0; i < vertices.length; i++) {
            translated[i] = new Vector(
                ((vertices[i].x - this.imagePosition.x) / this.imagePosition.width) * this.imageSize.width,
                ((vertices[i].y - this.imagePosition.y) / this.imagePosition.height) * this.imageSize.height
            );
        }

        return translated;
    }

    private prepareMask(vertices: Vector[], imageSize: Size): boolean[] {
        const mask: boolean[] = new Array(imageSize.width * imageSize.height);
        const nodeX: number[] = new Array(vertices.length);

        //  Loop through the rows of the image.
        for (let pixelY = 0; pixelY < imageSize.height; ++pixelY) {
            const nodesInRowCount: number = this.buildArrayOfNodes(vertices, nodeX, pixelY);
            this.sortNodes(nodeX, nodesInRowCount);

            //  Fill the pixels between node pairs.
            for (let i = 0; i < nodesInRowCount; i += 2) {
                if (nodeX[i] >= imageSize.width) break;

                if (nodeX[i + 1] > this.imageLeftBorder) {
                    if (nodeX[i] < this.imageLeftBorder) {
                        nodeX[i] = this.imageLeftBorder;
                    }
                    if (nodeX[i + 1] > imageSize.width) {
                        nodeX[i + 1] = imageSize.width;
                    }

                    for (let pixelX = nodeX[i]; pixelX < nodeX[i + 1]; pixelX++) {
                        mask[pixelX + pixelY * imageSize.width] = true;
                    }
                }
            }
        }

        return mask;
    }

    private buildArrayOfNodes(vertices: Vector[], nodeX: number[], pixelY: number): number {
        let nodesInRowCount = 0;
        for (let i = 0, j = vertices.length - 1; i < vertices.length; i++) {
            if ((vertices[i].y < pixelY && vertices[j].y >= pixelY) || (vertices[j].y < pixelY && vertices[i].y >= pixelY)) {
                nodeX[nodesInRowCount++] =
                    vertices[i].x + ((pixelY - vertices[i].y) / (vertices[j].y - vertices[i].y)) * (vertices[j].x - vertices[i].x);
            }
            j = i;
        }

        return nodesInRowCount;
    }

    private sortNodes(nodeX: number[], nodesInRowCount: number): void {
        let i = 0;
        while (i < nodesInRowCount - 1) {
            if (nodeX[i] > nodeX[i + 1]) {
                const swapValue: number = nodeX[i];
                nodeX[i] = nodeX[i + 1];
                nodeX[i + 1] = swapValue;
                if (i != 0) {
                    i--;
                }
            } else {
                i++;
            }
        }
    }
}
