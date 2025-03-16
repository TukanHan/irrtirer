export class ArrayHelpers {
    public static moveElemInArray<T>(arr: T[], fromIndex: number, toIndex: number): T[] {
        const element: T = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);

        return arr;
    }

    public static addOrUpdate<T>(arr: T[], elem: T, predicate: (x: T) => boolean): T[] {
        const index: number = arr.findIndex(predicate);
        if (index === -1) {
            arr.push(elem);
        } else {
            arr[index] = elem;
        }

        return arr;
    }
}
