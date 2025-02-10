import { Color } from "../models/color.model";

export class ImageHelper {
    static async getImageSrcPixelArray(imgSrc: string): Promise<Uint8ClampedArray> {
        const img = await this.getImageObjectBySrc(imgSrc);
        return this.getImagePixelArray(img);
    }

    static async getImageObjectBySrc(imgSrc: string): Promise<HTMLImageElement> {
        const img = new Image();
        img.src = imgSrc;
        await img.decode();

        return img;
    }

    static getImagePixelArray(decodedImg: HTMLImageElement): Uint8ClampedArray {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = decodedImg.width;
        canvas.height = decodedImg.height;

        context.drawImage(decodedImg, 0, 0, decodedImg.width, decodedImg.height);

        return context.getImageData(0, 0, canvas.width, canvas.height).data;
    }

    static getImageOnCanvas(decodedImg: HTMLImageElement): HTMLCanvasElement {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = decodedImg.width;
        canvas.height = decodedImg.height;

        context.drawImage(decodedImg, 0, 0, decodedImg.width, decodedImg.height);
        return canvas;
    }

    static normalizeCanvasColorAttay(canvasColorArray: Uint8ClampedArray): Color[] {
        const length: number = canvasColorArray.length / 4;
        const colors: Color[] = [];
        for(let i =0; i< length; ++i) {
            colors.push({
                r: canvasColorArray[i * 4],
                g: canvasColorArray[i * 4 + 1],
                b: canvasColorArray[i * 4 + 2],
                a: canvasColorArray[i * 4 + 3],
            });
        }

        return colors;
    }
}
