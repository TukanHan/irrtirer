import { IVector } from "./vector.interface";

export class Vector implements IVector {
    public readonly x: number = 0;
    public readonly y: number = 0;

    public static readonly zero: Vector = new Vector(0, 0);

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}