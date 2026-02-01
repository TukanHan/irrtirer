import { Vector } from './vector.model';

export class Triangle {
    public readonly a: Vector = Vector.zero;
    public readonly b: Vector = Vector.zero;
    public readonly c: Vector = Vector.zero;

    public getVertices(): Vector[] {
        return [this.a, this.b, this.c];
    }

    public static restore(obj: Triangle): void {
        Object.setPrototypeOf(obj, Triangle.prototype);
        obj.getVertices().forEach((vertex) => Vector.restore(vertex));
    }
}
