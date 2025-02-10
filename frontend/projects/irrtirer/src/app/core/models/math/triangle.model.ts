import { Vector } from './vector.model';

export class Triangle {
    a: Vector;
    b: Vector;
    c: Vector;

    public getVertices(): Vector[] {
        return [this.a, this.b, this.c];
    }

    public static restore(obj: Triangle): void {
        Object.setPrototypeOf(obj, Triangle.prototype);
        obj.getVertices().forEach((vertex) => Vector.restore(vertex));
    }
}
