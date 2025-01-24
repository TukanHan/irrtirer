import { UnitConverter } from '../../../core/helpers/unit-converter';
import { Vector } from '../../../core/models/vector.model';
import { Size } from '../../../core/models/size.interface';

export class Viewport {
    /**
     * Position of canvas center in unit
     */
    readonly position: Vector;

    /**
     * Zoom of viewport
     */
    readonly zoom: number;

    /**
     * Size of canvas in px
     */
    readonly pxSize: Size;

    /**
     * Size of canvas in unit
     */
    readonly cmSize: Size;

    /**
     * Position of canvas point (0,0) in unit system
     */
    readonly startWorldPos: Vector;

    /**
     * Position of canvas point (w,h) in unit system
     */
    readonly endWorldPos: Vector;

    constructor(position: Vector, zoom: number, pxSize: Size) {
        this.position = position;
        this.zoom = zoom;
        this.pxSize = pxSize;

        this.cmSize = this.calculateCmSize();
        this.startWorldPos = this.calculateStartWorldPos();
        this.endWorldPos = this.calculateEndWorldPos();
    }

    private calculateCmSize(): Size {
        return {
            width: UnitConverter.pxToCm(this.pxSize.width) * this.zoom,
            height: UnitConverter.pxToCm(this.pxSize.height) * this.zoom,
        };
    }

    private calculateStartWorldPos(): Vector {
        return new Vector(
            this.position.x - this.cmSize.width / 2,
            this.position.y - this.cmSize.height / 2,
        );
    }

    private calculateEndWorldPos(): Vector {
        return new Vector(
            this.position.x + this.cmSize.width / 2,
            this.position.y + this.cmSize.height / 2,
        );
    }

    public getViewportPosition(worldPos: Vector): Vector {
        return new Vector(
            this.getViewportXPosition(worldPos.x),
            this.getViewportYPosition(worldPos.y),
        );
    }

    public getViewportXPosition(worldXPos: number): number {
        return ((worldXPos - this.startWorldPos.x) / this.cmSize.width) * this.pxSize.width;
    }

    public getViewportYPosition(worldYPos: number): number {
        return ((worldYPos - this.startWorldPos.y) / this.cmSize.height) * this.pxSize.height;
    }

    public getWorldPosition(viewportPos: Vector): Vector {
        return new Vector(
            this.getWorldXPosition(viewportPos.x),
            this.getWorldYPosition(viewportPos.y),
        );
    }

    public getWorldXPosition(viewportXPos: number): number {
        return (viewportXPos / this.pxSize.width) * this.cmSize.width + this.startWorldPos.x;
    }

    public getWorldYPosition(viewportYPos: number): number {
        return (viewportYPos / this.pxSize.height) * this.cmSize.height + this.startWorldPos.y;
    }
}
