import hash from 'hash-it';

export class Vector {
    readonly x: number = 0;
    readonly y: number = 0;

    static readonly zero: Vector = new Vector(0, 0);

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public static distance(a: Vector, b: Vector): number {
        return Math.hypot(b.x - a.x, b.y - a.y);
    }

    public static multiply(v: Vector, scalar: number): Vector {
        return new Vector(v.x * scalar, v.y * scalar);
    }

    public static substract(a: Vector, b: Vector): Vector {
        return new Vector(a.x - b.x, a.y - b.y);
    }

    equal(other: Vector): boolean {
        return this.x === other.x && this.y === other.y;
    }

    hash(): number {
        return hash(this);
    }
}
