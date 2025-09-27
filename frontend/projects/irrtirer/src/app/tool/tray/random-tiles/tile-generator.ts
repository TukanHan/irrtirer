import { PolygonHelper } from '../../../core/helpers/polygon/polygon-helper';
import { RandomHelper } from '../../../core/helpers/random-helper';
import { TileModel } from '../../../core/models/mosaic-project.model';
import { Range } from '../../../core/models/math/range.interface';
import { Vector } from '../../../core/models/math/vector.model';
import Color, { ColorInstance } from 'color';

export class TileGenerator {
    constructor(private readonly imagePixelArray: Uint8ClampedArray) {}

    public generateTileSet(range: Range, count: number): TileModel[] {
        const tiles: TileModel[] = [];

        for (let i = 0; i < count; ++i) {
            tiles.push(this.generateTile(range));
        }

        return tiles;
    }

    private generateTile(range: Range): TileModel {
        let vertices: Vector[];

        do {
            vertices = this.generateVertices(range);
        } while (PolygonHelper.calculateConvexityFactor([...vertices].reverse()) < 0.18);

        const horizontalOrientedVertices = this.rotatePolygonToHorizontal(vertices);
        const centroid = PolygonHelper.calculatePolygonCentroid(horizontalOrientedVertices);
        const normalizedVertices = this.normalizeVertices(horizontalOrientedVertices, centroid);

        return {
            id: crypto.randomUUID(),
            vertices: normalizedVertices,
            color: this.randomColor().hex(),
        };
    }

    private generateVertices(radiusRange: Range): Vector[] {
        const corners: number = RandomHelper.nextInt(4, 6);
        const tileCornerPoints: Vector[] = [];

        for (let i = 0; i < corners; ++i) {
            const radius: number = RandomHelper.nextFloat(radiusRange.min, radiusRange.max);
            tileCornerPoints.push(this.generateVertex(i, corners, radius));
        }

        return tileCornerPoints;
    }

    private generateVertex(vertexIndex: number, verticesCount: number, radius: number): Vector {
        const angle: number = ((360 / verticesCount) * vertexIndex + RandomHelper.nextFloat(0, 30)) % 360;
        const radians: number = (angle * Math.PI) / 180;
        const directionVector = new Vector(Math.sin(radians), Math.cos(radians));

        return directionVector.multiply(radius);
    }

    private randomColor(): ColorInstance {
        const pixelCount = this.imagePixelArray.length / 4;
        const pixelIndex = RandomHelper.nextInt(0, pixelCount-1);

        return Color({
            r: this.imagePixelArray[pixelIndex * 4],
            g: this.imagePixelArray[pixelIndex * 4 + 1],
            b: this.imagePixelArray[pixelIndex * 4 + 2],
        });
    }

    private normalizeVertices(vertices: Vector[], centroid: Vector): Vector[] {
        return vertices.map((vertex) => this.roundVertexCoords(vertex.sub(centroid)));
    }

    private roundVertexCoords(vertex: Vector): Vector {
        return new Vector(
            Math.round((vertex.x + Number.EPSILON) * 100) / 100,
            Math.round((vertex.y + Number.EPSILON) * 100) / 100,
        );
    }

    private rotatePolygonToHorizontal(vertices: Vector[]): Vector[] {
        let maxDistanceSqr: number = 0;
        let vertexA: Vector = vertices[0];
        let vertexB: Vector = vertices[1];

        for (let i = 0; i < vertices.length; i++) {
            for (let j = i + 1; j < vertices.length; j++) {
                const dx = vertices[j].x - vertices[i].x;
                const dy = vertices[j].y - vertices[i].y;
                const distanceSqr = dx * dx + dy * dy;
                if (distanceSqr > maxDistanceSqr) {
                    maxDistanceSqr = distanceSqr;
                    vertexA = vertices[i];
                    vertexB = vertices[j];
                }
            }
        }

        const angle: number = Math.atan2(vertexB.y - vertexA.y, vertexB.x - vertexA.x);

        return vertices.map((point) => {
            const x = point.x - vertexA.x;
            const y = point.y - vertexA.y;
            const rotatedX = x * Math.cos(-angle) - y * Math.sin(-angle);
            const rotatedY = x * Math.sin(-angle) + y * Math.cos(-angle);
            return new Vector(rotatedX + vertexA.x, rotatedY + vertexA.y);
        });
    }
}
