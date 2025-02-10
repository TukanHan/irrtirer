import { Vector } from '../../models/math/vector.model';

const deg2Rad: number = Math.PI / 180;

export function rotatePointAroundPoint(point: Vector, center: Vector, angle: number): Vector {
    angle *= deg2Rad;
    const x: number = Math.cos(angle) * (point.x - center.x) - Math.sin(angle) * (point.y - center.y) + center.x;
    const y: number = Math.sin(angle) * (point.x - center.x) + Math.cos(angle) * (point.y - center.y) + center.y;

    return new Vector(x, y);
}

export function transformPolygon(polygon: Vector[], position: Vector, angle: number = 0, scale: number = 1): Vector[] {
    return polygon
        .map((vertex: Vector) => rotatePointAroundPoint(vertex, Vector.zero, angle)
            .multiply(scale)
            .add(position)
        );
}
