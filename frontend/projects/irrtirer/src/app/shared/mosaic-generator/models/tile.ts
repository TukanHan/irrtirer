import { Color } from '../../../core/models/color.model';
import { TileModel } from '../../../core/models/mosaic-project.model';
import { Vector } from '../../../core/models/vector.model';
import { calculatePointToPolygonDistance } from '../helpers/polygon-helpers/point-to-polygon-distance-calculator';

export class Tile implements TileModel {
    public id: string;

    public color: Color;
    public vertices: Vector[];

    public outerRadius: number;
    public innerRadius: number;

    public constructor(tile: TileModel) {
        this.id = tile.id;
        this.color = tile.color;
        this.vertices = tile.vertices;

        this.outerRadius = Math.sqrt(Math.max(...this.vertices.map((v) => v.x * v.x + v.y * v.y)));
        this.innerRadius = calculatePointToPolygonDistance(Vector.zero, this.vertices);
    }
}
