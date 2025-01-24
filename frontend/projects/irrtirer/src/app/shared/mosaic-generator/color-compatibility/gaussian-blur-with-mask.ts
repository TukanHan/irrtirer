//based on thread https://forum.unity.com/threads/contribution-texture2d-blur-in-c.185694/

import { Color } from '../../../core/models/color.model';
import { Size } from '../../../core/models/size.interface';
import { Vector } from '../../../core/models/vector.model';

class ColorSum {
    private r: number;
    private g: number;
    private b: number;
    private a: number;

    private count: number;

    public add(color: Color): void {
        this.r += color.r;
        this.g += color.g;
        this.b += color.b;
        this.a += color.a ?? 0;

        this.count++;
    }

    public subtract(color: Color): void {
        this.r -= color.r;
        this.g -= color.g;
        this.b -= color.b;
        this.a -= color.a;

        this.count--;
    }

    public GetColor(): Color {
        return {
            r: (this.r / this.count) * 255,
            g: (this.g / this.count) * 255,
            b: (this.b / this.count) * 255,
            a: (this.a / this.count) * 255,
        };
    }
}

export class GaussianBlurWithMask {
    private readonly oryginalColors: Color[];
    private readonly width: number;
    private readonly height: number;

    private mask: boolean[];

    public constructor(oryginalColors: Color[], size: Size) {
        this.oryginalColors = oryginalColors;
        this.width = size.width;
        this.height = size.height;
    }

    public blur(mask: boolean[], radius: number, iterations: number): Color[] {
        this.mask = mask;

        const arrayA: Color[] = [...this.oryginalColors];
        const arrayB: Color[] = new Array(this.oryginalColors.length);

        for (let i = 0; i < iterations; ++i) {
            this.horizontalBlur(arrayA, arrayB, radius);
            this.verticalBlur(arrayB, arrayA, radius);
        }

        return arrayA;
    }

    private horizontalBlur(inputColors: Color[], outputColors: Color[], radius: number): void {
        //paralele byli tu
        for (let imgY = 0; imgY < this.height; ++imgY) {
            const colorSum: ColorSum = new ColorSum();

            for (let imgX = 0; imgX < this.width; ++imgX) {
                if (imgX == 0) {
                    for (let x = 0; x <= radius; ++x) {
                        const pos: Vector = new Vector(x, imgY);
                        if (this.isPixelInArrayAndIsVisable(pos)) {
                            colorSum.add(inputColors[pos.y * this.width + pos.x]);
                        }
                    }
                } else {
                    const pxToSubstractPos: Vector = new Vector(imgX - radius - 1, imgY);
                    if (this.isPixelInArrayAndIsVisable(pxToSubstractPos)) {
                        colorSum.subtract(inputColors[pxToSubstractPos.y * this.width + pxToSubstractPos.x]);
                    }

                    const pxToAddPos: Vector = new Vector(imgX + radius, imgY);
                    if (this.isPixelInArrayAndIsVisable(pxToAddPos)) {
                        colorSum.add(inputColors[pxToAddPos.y * this.width + pxToAddPos.x]);
                    }
                }

                const index: number = imgY * this.width + imgX;
                outputColors[index] = this.mask[index] ? colorSum.GetColor() : inputColors[index];
            }
        }
    }

    private verticalBlur(inputColors: Color[], outputColors: Color[], radius: number): void {
        for (let imgX = 0; imgX < this.width; ++imgX) {
            const colorSum: ColorSum = new ColorSum();

            for (let imgY = 0; imgY < this.height; ++imgY) {
                if (imgY == 0) {
                    for (let y = -radius; y <= radius; ++y) {
                        const pos: Vector = new Vector(imgX, y);
                        if (this.isPixelInArrayAndIsVisable(pos)) {
                            colorSum.add(inputColors[pos.y * this.width + pos.x]);
                        }
                    }
                } else {
                    const pxToSubstractPos: Vector = new Vector(imgX, imgY - radius - 1);
                    if (this.isPixelInArrayAndIsVisable(pxToSubstractPos)) {
                        colorSum.subtract(inputColors[pxToSubstractPos.y * this.width + pxToSubstractPos.x]);
                    }

                    const pxToAddPos: Vector = new Vector(imgX, imgY + radius);
                    if (this.isPixelInArrayAndIsVisable(pxToAddPos)) {
                        colorSum.add(inputColors[pxToAddPos.y * this.width + pxToAddPos.x]);
                    }
                }

                const index: number = imgY * this.width + imgX;
                outputColors[index] = this.mask[index] ? colorSum.GetColor() : inputColors[index];
            }
        }
    }

    private isPixelInArrayAndIsVisable(point: Vector): boolean {
        if (point.x < 0 || point.x >= this.width || point.y < 0 || point.y >= this.height) {
            return false;
        }

        return this.mask[point.y * this.width + point.x];
    }
}
