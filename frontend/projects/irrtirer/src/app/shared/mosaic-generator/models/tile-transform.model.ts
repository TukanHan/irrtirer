import hashIt from 'hash-it';
import { PolygonHelper } from '../../../core/helpers/polygon/polygon-helper';
import { Hashable } from '../../../core/models/hash-map';
import { Vector } from '../../../core/models/vector.model';
import { rotatePointAroundPoint } from '../helpers/trigonometry-helper';
import { GeometryObject } from './geometry-object.model';
import { Tile } from './tile';

export class TileTransform extends GeometryObject implements Hashable {
    public tile: Tile;

    public position: Vector;
    public angle: number;
    public scale: number;

    public override outerRadius: number;
    public override innerRadius: number;

    private area?: number = null;
    public getArea(): number {
        this.area ??= PolygonHelper.calculatePolygonArea(this.getWorldVertices());
        return this.area;
    }

    private worldVertices: Vector[] = null;

    public constructor(tile: Tile, position: Vector, angle: number = 1, scale: number = 1) {
        super();
        this.tile = tile;
        this.position = position;
        this.angle = angle;
        this.scale = scale;
        this.outerRadius = tile.outerRadius * scale;
        this.innerRadius = tile.innerRadius * scale;
    }

    getHash(): number {
        return hashIt({ tileId: this.tile.id, pos: this.position, scale: this.scale, angle: this.angle });
    }

    public Transform(position: Vector, angle: number, scale: number = 1): TileTransform {
        return new TileTransform(this.tile, position, angle, scale);
    }

    public override getCentroid(): Vector {
        return this.position;
    }

    public override getWorldVertices(): Vector[] {
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
