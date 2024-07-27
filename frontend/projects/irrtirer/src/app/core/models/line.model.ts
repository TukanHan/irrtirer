import { Vector } from './point.model';

export class Line {
    start: Vector;
    end: Vector;

    constructor(start: Vector, end: Vector) {
        this.start = start;
        this.end = end;
    }
}
