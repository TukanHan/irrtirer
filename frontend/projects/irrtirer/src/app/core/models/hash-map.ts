export interface Hashable {
    getHash(): number;
}

export class HashMap<K extends Hashable, V> {
    private valuesMap: Map<number, V> = new Map<number, V>();
    private keysMap: Map<number, K> = new Map<number, K>();

    public getKeys(): K[] {
        return Array.from(this.keysMap.values());
    }

    public getValues(): Iterable<V> {
        return this.valuesMap.values();
    }

    public set(key: K, value: V): void {
        const hash: number = key.getHash();
        this.valuesMap.set(hash, value);
        this.keysMap.set(hash, key);
    }

    public get(key: K): V {
        const hash = key.getHash();
        return this.valuesMap.get(hash);
    }

    public any(): boolean {
        return !!this.keysMap.size;
    }

    public get size() {
        return this.keysMap.size;
    }

    *[Symbol.iterator](): Iterator<[K, V]> {
        for (const keys of this.keysMap) {
            yield [keys[1], this.valuesMap.get(keys[0])];
        }
    }
}
