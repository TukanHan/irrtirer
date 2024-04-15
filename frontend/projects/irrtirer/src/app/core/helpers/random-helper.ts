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
}
