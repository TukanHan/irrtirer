import { Vector } from './point.model';
import hash from 'hash-it';

export class Line {
    start: Vector;
    end: Vector;

    constructor(start: Vector, end: Vector) {
        this.start = start;
        this.end = end;
    }

    hash(): number {
        return hash(this);
    }
}
