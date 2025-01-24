import { Vector } from '../../../core/models/vector.model';
import { rotatePointAroundPoint } from '../helpers/trigonometry-helper';

export class Triangle {
    public vertices: Vector[];

    public get a() {
        return this.vertices[0];
    }
    public get b() {
        return this.vertices[1];
    }
    public get c() {
        return this.vertices[2];
    }

    public area: number;

    public constructor(a: Vector, b: Vector, c: Vector) {
        this.vertices = [a, b, c];
        this.area = Triangle.calculateArea(this.vertices);
    }

    public getTransformed(newPosition: Vector, angle: number, scale: number): Triangle {
        const a: Vector = rotatePointAroundPoint(this.a, Vector.zero, angle).multiply(scale).add(newPosition);
        const b: Vector = rotatePointAroundPoint(this.b, Vector.zero, angle).multiply(scale).add(newPosition);
        const c: Vector = rotatePointAroundPoint(this.c, Vector.zero, angle).multiply(scale).add(newPosition);

        return new Triangle(a, b, c);
    }

    public static calculateArea(v: Vector[]): number {
        return Math.abs(v[0].x * (v[1].y - v[2].y) + v[1].x * (v[2].y - v[0].y) + v[2].x * (v[0].y - v[1].y)) / 2;
    }

    public static restore(obj: Triangle): void {
        Object.setPrototypeOf(obj, Triangle.prototype);
        for(let i =0; i< obj.vertices.length; i++) {
            Vector.restore(obj.vertices[i]);
        }
    }
}
