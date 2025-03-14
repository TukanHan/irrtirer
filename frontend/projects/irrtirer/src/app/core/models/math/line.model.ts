import { Vector } from './vector.model';
import hash from 'hash-it';

export class Line {
    public start: Vector;
    public end: Vector;

    constructor(start: Vector, end: Vector) {
        this.start = start;
        this.end = end;
    }

    public hash(): number {
        return hash(this);
    }
}
