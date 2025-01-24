import { Color } from '../../../core/models/color.model';
import { Rect } from '../../../core/models/rect.model';
import { Size } from '../../../core/models/size.interface';
import { Vector } from '../../../core/models/vector.model';

export class BluredImageObject {
    public bluredImage: Color[];
    public textureSize: Size;

    private readonly imageObjectPosition: Rect;

    public constructor(bluredImage: Color[], textureSize: Size, imageObjectPosition: Rect) {
        this.bluredImage = bluredImage;
        this.textureSize = textureSize;
        this.imageObjectPosition = imageObjectPosition;
    }

    public getPictureColorAtPosition(worldPos: Vector): Color | null {
        if (this.isPointInsidePictureBorder(worldPos)) {
            return this.getColorFromWorldPoint(worldPos);
        }

        return null;
    }

    private getColorFromWorldPoint(worldPos: Vector): Color {
        const pixelPos: Vector = this.getPixelPositionFromWorldPosition(worldPos);
        return this.bluredImage[pixelPos.y * this.textureSize.width + pixelPos.x];
    }

    private getPixelPositionFromWorldPosition(worldPos: Vector): Vector {
        const localPos: Vector = new Vector(worldPos.x - this.imageObjectPosition.x, worldPos.y - this.imageObjectPosition.y);
        const normalPos: Vector = new Vector(localPos.x / this.imageObjectPosition.width, localPos.y / this.imageObjectPosition.height);
        const spritePixelPos: Vector = new Vector(Math.floor(normalPos.x * this.textureSize.width), Math.floor(normalPos.y * this.textureSize.height));

        return new Vector(spritePixelPos.x, spritePixelPos.y);
    }

    public isPointInsidePictureBorder(point: Vector): boolean {
        return (
            point.x >= this.imageObjectPosition.x &&
            point.x < this.imageObjectPosition.x + this.imageObjectPosition.width &&
            point.y >= this.imageObjectPosition.y &&
            point.y < this.imageObjectPosition.y + this.imageObjectPosition.height
        );
    }
}
