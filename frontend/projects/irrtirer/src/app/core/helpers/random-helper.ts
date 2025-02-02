import { Vector } from '../models/math/vector.model';

export class RandomHelper {
    /**
     * @param min included
     * @param max included
     * @returns random value in range
     */
    public static nextInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /**
     * @param min included
     * @param max included
     * @returns random value in range
     */
    public static nextFloat(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    public static randomPointInTriangle(v: Vector[]): Vector {
        const r1: number = Math.random();
        const r2: number = Math.random();

        const x: number = (1 - Math.sqrt(r1)) * v[0].x + Math.sqrt(r1) * (1 - r2) * v[1].x + Math.sqrt(r1) * r2 * v[2].x;
        const y: number = (1 - Math.sqrt(r1)) * v[0].y + Math.sqrt(r1) * (1 - r2) * v[1].y + Math.sqrt(r1) * r2 * v[2].y;

        return new Vector(x, y);
    }
}
