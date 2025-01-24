import { IntersectionRecord } from "./intersection-record";

export class Intersections {
    records: IntersectionRecord[] = [];
    intersectionArea: number = 0;

    public addIntersection(record: IntersectionRecord): void {
        this.records.push(record);
        this.intersectionArea += record.area;
    }

    public static restore(obj: Intersections): void {
        Object.setPrototypeOf(obj, Intersections.prototype);
    }
}