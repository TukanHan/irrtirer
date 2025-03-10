//Based on https://www.tutorialspoint.com/Check-if-a-given-point-lies-inside-a-Polygon

import { Line } from '../../models/math/line.model';
import { Vector } from '../../models/math/vector.model';

export class PresenceInPoligonHelper {
    public static isPointInsidePolygon(vertices: Vector[], point: Vector): boolean {
        // When polygon has less than 3 edge, it is not polygon
        if (vertices.length < 3) {
            return false;
        }

        // Create a point at infinity, y is same as point p
        const pt: Vector = new Vector(Number.MAX_VALUE, point.y);
        const exline: Line = new Line(point, pt);
        let count: number = 0;
        let i: number = 0;
        do {
            // Forming a line from two consecutive points of poly
            const side: Line = new Line(vertices[i], vertices[(i + 1) % vertices.length]);
            if (this.areLineIntersecting(side, exline)) {
                // If side is intersects exline
                if (this.getDirection(side.start, point, side.end) == 0) {
                    return this.isPointOnLine(side, point);
                }

                count++;
            }

            i = (i + 1) % vertices.length;
        } while (i != 0);

        // When count is odd
        return (count & 1) == 1;
    }

    public static areLineIntersecting(lineA: Line, lineB: Line): boolean {
        // Four direction for two lines and points of other line
        const dir1: number = this.getDirection(lineA.start, lineA.end, lineB.start);
        const dir2: number = this.getDirection(lineA.start, lineA.end, lineB.end);
        const dir3: number = this.getDirection(lineB.start, lineB.end, lineA.start);
        const dir4: number = this.getDirection(lineB.start, lineB.end, lineA.end);

        // When intersecting
        if (dir1 != dir2 && dir3 != dir4) {
            return true;
        }

        // When p2 of line2 are on the line1
        if (dir1 == 0 && this.isPointOnLine(lineA, lineB.start)) {
            return true;
        }

        // When p1 of line2 are on the line1
        if (dir2 == 0 && this.isPointOnLine(lineA, lineB.end)) {
            return true;
        }

        // When p2 of line1 are on the line2
        if (dir3 == 0 && this.isPointOnLine(lineB, lineA.start)) {
            return true;
        }

        // When p1 of line1 are on the line2
        if (dir4 == 0 && this.isPointOnLine(lineB, lineA.end)) {
            return true;
        }

        return false;
    }

    private static isPointOnLine(line: Line, point: Vector): boolean {
        return (
            point.x <= Math.max(line.start.x, line.end.x) &&
            point.x >= Math.min(line.start.x, line.end.x) &&
            point.y <= Math.max(line.start.y, line.end.y) &&
            point.y >= Math.min(line.start.y, line.end.y)
        );
    }

    private static getDirection(a: Vector, b: Vector, c: Vector): number {
        const val: number = (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y);

        if (val == 0) {
            return 0; // Collinear
        } else if (val < 0) {
            return 2; // Anti-clockwise direction
        } else {
            return 1; // Clockwise direction
        }
    }
}
