import { Triangle } from '../../../shared/mosaic-generator/models/triangle.model';
import { Line } from '../../models/line.model';
import { Vector } from '../../models/vector.model';

export class TriangulationMeshHelper {
    public static getMeshInnerLines(triangulationMesh: Triangle[]): Line[] {
        const lines: Map<number, { line: Line; count: number }> = this.collectMeshLines(triangulationMesh);

        const innerLines: Line[] = [];
        for (const line of lines.values()) {
            if (line.count == 2) {
                innerLines.push(line.line);
            }
        }

        return innerLines;
    }

    public static getMeshOuterContour(triangulationMesh: Triangle[]): Vector[] {
        const lines: Map<number, { line: Line; count: number }> = this.collectMeshLines(triangulationMesh);

        const outerLines: Line[] = [];
        for (const line of lines.values()) {
            if (line.count != 2) {
                outerLines.push(line.line);
            }
        }

        return this.reconstructContour(outerLines);
    }

    public static collectMeshLines(triangulationMesh: Triangle[]): Map<number, { line: Line; count: number }> {
        const lines: Map<number, { line: Line; count: number }> = new Map();

        for (const triangle of triangulationMesh) {
            let previousVertex: Vector = triangle.c;
            for (let i = 0; i < 3; ++i) {
                const currentVertex = triangle.vertices[i];
                const vertices =
                previousVertex.getHash() < currentVertex.getHash()
                        ? [previousVertex, currentVertex]
                        : [currentVertex, previousVertex];

                const line = new Line(vertices[0], vertices[1]);
                const lineHash: number = line.hash();

                const dictionaryValue = lines.get(lineHash);
                if (dictionaryValue) {
                    dictionaryValue.count++;
                } else {
                    lines.set(lineHash, { line, count: 1 });
                }

                previousVertex = currentVertex;
            }
        }

        return lines;
    }

    private static reconstructContour(outerLines: Line[]): Vector[] {
        const contour: Vector[] = [];

        let currentLine: Line = outerLines[0];
        let currentPoint: Vector = currentLine.start;
        for (let i = 0; i < outerLines.length; ++i) {
            if (!contour.find((vertex) => Vector.areEqual(vertex, currentPoint))) {
                contour.push(currentPoint);
            }

            currentLine = outerLines.find(
                (line) => currentLine !== line && (Vector.areEqual(currentPoint, line.start) || Vector.areEqual(currentPoint, line.end))
            );
            currentPoint = Vector.areEqual(currentLine.start, currentPoint) ? currentLine.end : currentLine.start;
        }

        return contour;
    }
}
