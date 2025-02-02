import { Vector } from '../../../core/models/math/vector.model';
import { TileModel } from '../../../core/models/mosaic-project.model';
import { rotatePointAroundPoint } from '../../../core/helpers/polygon/trigonometry-helper';

export class TileTransform {
    public tile: TileModel;

    public position: Vector;
    public angle: number;
    public scale: number;

    private worldVertices: Vector[] = null;

    public constructor(tile: TileModel, position: Vector, angle: number = 1, scale: number = 1) {
        this.tile = tile;
        this.position = position;
        this.angle = angle;
        this.scale = scale;
    }

    public getWorldVertices(): Vector[] {
        this.worldVertices ??= TileTransform.getWorldVertices(this.tile.vertices, this.position, this.angle, this.scale);
        return this.worldVertices;
    }

    private static getWorldVertices(vertices: Vector[], position: Vector, angle: number = 0, scale: number = 1): Vector[] {
        const worldVertices: Vector[] = new Array<Vector>(vertices.length);
        for (let i = 0; i < vertices.length; ++i) {
            worldVertices[vertices.length - 1 - i] = rotatePointAroundPoint(vertices[i], Vector.zero, angle)
                .multiply(scale)
                .add(position);
        }

        return worldVertices;
    }
}
