import { Color } from '../models/color.model';

export class ColorHelper {
    public static toHex(color: Color): string {
        return '#' + this.chanelToHex(color.r) + this.chanelToHex(color.g) + this.chanelToHex(color.b);
    }

    static chanelToHex(chanel: number): string {
        const hex = chanel.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    public static toColor(color: string): Color {
        return {
            r: parseInt(color.substring(1, 3), 16),
            g: parseInt(color.substring(3, 5), 16),
            b: parseInt(color.substring(5, 7), 16),
        };
    }

    public static lerp(colorA: Color, colorB: Color, value: number): Color {
        const r = Math.round(colorA.r + (colorB.r - colorA.r) * value);
        const g = Math.round(colorA.g + (colorB.g - colorA.g) * value);
        const b = Math.round(colorA.b + (colorB.b - colorA.b) * value);

        return { r, g, b };
    }
}
