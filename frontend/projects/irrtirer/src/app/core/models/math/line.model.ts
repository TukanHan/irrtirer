import { hash } from 'hash-it';
import { Vector } from './vector.model';

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
