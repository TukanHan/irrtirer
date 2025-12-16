import { BaseCanvasObject, CanvasObject, IVector, Size, UnitConverter, Viewport } from "../../../../../active-canvas/src/public-api";
import { Vector } from "../../core/models/math/vector.model";

export class ImageObject extends BaseCanvasObject implements CanvasObject {
    constructor(
        private readonly image: HTMLImageElement,
        private readonly position: IVector,
        public readonly size: Size,
        private readonly order: number = 0
    ) {
        super();
    }

    public getOrder(): number {
        return this.order;
    }

    public drawObject(ctx: CanvasRenderingContext2D, viewport: Viewport): void {
        const viewCmWidth = UnitConverter.pxToCm(viewport.pxSize.width) * viewport.zoom;
        const viewCmHeight = UnitConverter.pxToCm(viewport.pxSize.height) * viewport.zoom;

        const imageCanvasSize: Size = {
            width: (this.size.width / viewCmWidth) * viewport.pxSize.width,
            height: (this.size.height / viewCmHeight) * viewport.pxSize.height,
        };

        const position = viewport.getViewportPosition(this.position);
        const centeredPosition: IVector = new Vector(position.x - imageCanvasSize.width / 2, position.y - imageCanvasSize.height / 2);

        ctx.drawImage(this.image, centeredPosition.x, centeredPosition.y, imageCanvasSize.width, imageCanvasSize.height);
    }
}
