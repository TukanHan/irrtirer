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

    /**
     * color system conversion based on thread
     * https://stackoverflow.com/a/17243070
     */
    public static HSVtoRGB(h, s, v): Color {
        const i = Math.floor(h * 6);
        const f = h * 6 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);

        let r,g,b;
        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };
    }
}
