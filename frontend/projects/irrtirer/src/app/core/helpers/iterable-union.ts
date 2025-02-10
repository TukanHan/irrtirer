export class IterableUnion<T> implements Iterable<T> {
    constructor(private collections: Iterable<T>[]) {}

    *[Symbol.iterator](): Iterator<T> {
        for (const collection of this.collections) {
            for (const item of collection) {
                yield item;
            }
        }
    }
}
