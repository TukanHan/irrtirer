export class ImageHelper {
    static async getImageSrcPixelArray(imgSrc: string): Promise<Uint8ClampedArray> {
        var img = new Image();
        img.src = imgSrc;

        return this.getImagePixelArray(img);
    }

    static async getImagePixelArray(img: HTMLImageElement): Promise<Uint8ClampedArray> {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        await img.decode();

        canvas.width = img.width;
        canvas.height = img.height;

        context.drawImage(img, 0, 0, img.width, img.height);

        return context.getImageData(0, 0, img.width, img.height).data;
    }
}
