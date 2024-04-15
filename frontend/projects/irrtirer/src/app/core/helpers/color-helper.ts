import { Color } from '../models/color.model';

export class ColorHelper {
    public static toHex(color: Color): string {
        return '#' + this.chanelToHex(color.r) + this.chanelToHex(color.g) + this.chanelToHex(color.b);
    }

    static chanelToHex(chanel: number): string {
        const hex = chanel.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }
}
