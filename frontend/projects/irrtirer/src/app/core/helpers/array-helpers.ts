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

    /**
   * @returns Return -1 if target is not found
   */
    public static binarySearch<T>(arr: T[], target: T, comparsionFn: (a: T, b: T) => number): number {
        let left = 0;
        let right = arr.length - 1;
    
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
    
            if (comparsionFn(arr[mid], target) === 0) {
                return mid;
            }
            if (comparsionFn(arr[mid], target) < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    
        return -1;
    }
}
