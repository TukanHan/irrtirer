import { Vector } from '../../models/vector.model';

export class PolygonHelper {
    public static calculateConvexityFactor(vertices: Vector[]): number {
        const area: number = this.calculatePolygonArea(vertices);
        const circumference: number = this.calculatePolygonCircumference(vertices);

        return Math.sqrt(area) / circumference;
    }

    /**
     * Shoelace formula
     */
    public static calculatePolygonArea(vertices: Vector[]): number {
        if (vertices.length < 3) {
            throw new Error('pogygon should have at least 3 vertices');
        }

        let up: number = vertices.at(-1).x * vertices[0].y;
        let down: number = vertices.at(-1).y * vertices[0].x;

        for (let i = 0, n = vertices.length - 1; i < n; ++i) {
            up += vertices[i].x * vertices[i + 1].y;
            down += vertices[i].y * vertices[i + 1].x;
        }

        return (up - down) / 2;
    }

    public static calculatePolygonCircumference(vertices: Vector[]): number {
        let circumference: number = Vector.distance(vertices[0], vertices.at(-1));

        for (let i = 1; i < vertices.length; ++i) {
            circumference += Vector.distance(vertices[i], vertices[i - 1]);
        }

        return circumference;
    }

    public static calculatePolygonCentroid(vertices: Vector[]): Vector {
        let x = 0, y = 0;
        let area = 0;
        let b: Vector = vertices.at(-1);

        for (let i = 0; i < vertices.length; i++) {
            const a = vertices[i];

            const tempArea = a.y * b.x - a.x * b.y;
            area += tempArea;
            x += (a.x + b.x) * tempArea;
            y += (a.y + b.y) * tempArea;

            b = a;
        }

        area *= 3;

        return area == 0 ? Vector.zero : new Vector(x / area, y / area);
    }

    public static calculateOuterRadius(vertices: Vector[]): number {
        let maxDistance = 0;
        for (const vertex of vertices) {
            const distance = Vector.distance(Vector.zero, vertex);
            if (distance > maxDistance) {
                maxDistance = distance;
            }
        }

        return maxDistance;
    }
}
