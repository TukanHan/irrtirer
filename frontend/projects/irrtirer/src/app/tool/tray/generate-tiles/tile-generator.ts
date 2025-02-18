import { PolygonHelper } from '../../../core/helpers/polygon/polygon-helper';
import { RandomHelper } from '../../../core/helpers/random-helper';
import { TileModel } from '../../../core/models/mosaic-project.model';
import { Range } from '../../../core/models/math/range.interface';
import { Vector } from '../../../core/models/math/vector.model';
import Color, { ColorInstance } from 'color';

export class TileGenerator {
    constructor(private imagePixelArray: Uint8ClampedArray) {}

    public generateTileSet(range: Range, count: number): TileModel[] {
        const tiles: TileModel[] = [];

        for (let i = 0; i < count; ++i) {
            tiles.push(this.generateTile(range));
        }

        return tiles;
    }

    generateTile(range: Range): TileModel {
        let vertices: Vector[];

        do {
            vertices = this.generateVertices(range);
        } while (PolygonHelper.calculateConvexityFactor([...vertices].reverse()) < 0.18);

        const centroid = PolygonHelper.calculatePolygonCentroid(vertices);
        const normalizedVertices = this.normalizeVertices(vertices, centroid);

        return {
            id: crypto.randomUUID(),
            vertices: normalizedVertices,
            color: this.randomColor().hex(),
        };
    }

    generateVertices(radiusRange: Range): Vector[] {
        const corners: number = RandomHelper.nextInt(4, 6);
        const tileCornerPoints: Vector[] = [];

        for (let i = 0; i < corners; ++i) {
            const radius: number = RandomHelper.nextFloat(radiusRange.min, radiusRange.max);
            tileCornerPoints.push(this.generateVertex(i, corners, radius));
        }

        return tileCornerPoints;
    }

    generateVertex(vertexIndex: number, verticesCount: number, radius: number): Vector {
        const angle: number = ((360 / verticesCount) * vertexIndex + RandomHelper.nextFloat(0, 30)) % 360;
        const radians: number = (angle * Math.PI) / 180;
        const directionVector = new Vector(Math.sin(radians), Math.cos(radians));

        return directionVector.multiply(radius);
    }

    randomColor(): ColorInstance {
        const pixelCount = this.imagePixelArray.length / 4;
        const pixelIndex = RandomHelper.nextInt(0, pixelCount-1);

        return Color({
            r: this.imagePixelArray[pixelIndex * 4],
            g: this.imagePixelArray[pixelIndex * 4 + 1],
            b: this.imagePixelArray[pixelIndex * 4 + 2],
        });
    }

    normalizeVertices(vertices: Vector[], centroid: Vector): Vector[] {
        return vertices.map((vertex) => this.roundVertexCoords(vertex.sub(centroid)));
    }

    roundVertexCoords(vertex: Vector): Vector {
        return new Vector(
            Math.round((vertex.x + Number.EPSILON) * 100) / 100,
            Math.round((vertex.y + Number.EPSILON) * 100) / 100,
        );
    }
}
