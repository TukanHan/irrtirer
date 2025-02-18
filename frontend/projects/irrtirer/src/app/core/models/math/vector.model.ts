export class Vector {
    readonly x: number = 0;
    readonly y: number = 0;

    static readonly zero: Vector = new Vector(0, 0);

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public multiply(scalar: number): Vector {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    public add(b: Vector): Vector {
        return new Vector(this.x + b.x, this.y + b.y);
    }

    public sub(b: Vector): Vector {
        return new Vector(this.x - b.x, this.y - b.y);
    }
    
    public magnitude(): number {
        return Math.hypot(this.x, this.y);
    }

    public normalized(): Vector {
        const magnitude: number = this.magnitude();
        return new Vector(this.x / magnitude, this.y / magnitude);
    }

    public sqrMagnitude(): number {
        return this.x * this.x + this.y * this.y;
    }

    public static distance(a: Vector, b: Vector): number {
        return Math.hypot(b.x - a.x, b.y - a.y);
    }

    public static dot(a: Vector, b: Vector): number {
        return a.x * b.x + a.y * b.y;
    }
    
    public static areEqual(a: Vector, b: Vector): boolean {
        return a.x === b.x && a.y === b.y;
    }

    public static restore(obj: Vector): void {
        Object.setPrototypeOf(obj, Vector.prototype);
    }
}
