import { Vector } from '../../models/vector.model';

export class PointToPolygonDistanceCalculator {
    public static calculatePointToPolygonDistance(point: Vector, vertices: Vector[]): number {
        let minDistance = Number.MAX_VALUE;

        for (let i = 0; i < vertices.length; i++) {
            const p1: Vector = vertices[i];
            const p2: Vector = vertices[(i + 1) % vertices.length];

            const r = Vector.dot(p2.sub(p1), point.sub(p1)) / Math.pow(p2.sub(p1).magnitude(), 2);

            let distance;
            if (r < 0) {
                distance = point.sub(p1).magnitude();
            } else if (r > 1) {
                distance = p2.sub(point).magnitude();
            } else {
                distance = Math.sqrt(Math.pow(point.sub(p1).magnitude(), 2) - Math.pow(r * p2.sub(p1).magnitude(), 2));
            }

            if (distance < minDistance) {
                minDistance = distance;
            }
        }

        return minDistance;
    }
}
