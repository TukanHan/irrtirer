export class ImageHelper {
    public static async getImageSrcPixelArray(imgSrc: string): Promise<Uint8ClampedArray> {
        const img = await this.getImageObjectBySrc(imgSrc);
        return this.getImagePixelArray(img);
    }

    public static async getImageObjectBySrc(imgSrc: string): Promise<HTMLImageElement> {
        const img = new Image();
        img.src = imgSrc;
        await img.decode();

        return img;
    }

    private static getImagePixelArray(decodedImg: HTMLImageElement): Uint8ClampedArray {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = decodedImg.width;
        canvas.height = decodedImg.height;

        context.drawImage(decodedImg, 0, 0, decodedImg.width, decodedImg.height);

        return context.getImageData(0, 0, canvas.width, canvas.height).data;
    }

    public static base64ToUint8Array(base64: string): Uint8Array<ArrayBuffer> {
        const base64Data = base64.split(',')[1] || base64;
        
        const binaryString = atob(base64Data);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    }
}
