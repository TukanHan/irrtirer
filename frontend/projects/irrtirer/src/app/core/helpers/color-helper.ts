import { Color, ColorHsv } from '../models/color.model';

export class ColorHelper {
    public static rgbToHex(color: Color): string {
        return '#' + this.chanelToHex(color.r) + this.chanelToHex(color.g) + this.chanelToHex(color.b);
    }

    private static chanelToHex(chanel: number): string {
        const hex = chanel.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    public static hexToRgb(colorHexCode: string): Color {
        return {
            r: parseInt(colorHexCode.substring(1, 3), 16),
            g: parseInt(colorHexCode.substring(3, 5), 16),
            b: parseInt(colorHexCode.substring(5, 7), 16),
        };
    }

    public static hexToHsv(colorHexCode: string): ColorHsv {
        return this.rgbToHsv(this.hexToRgb(colorHexCode));
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
    public static hsvToRgb(color: ColorHsv): Color {
        const {h, s, v} = color;

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

    public static hsvToHex(color: ColorHsv): string {
        return this.rgbToHex(this.hsvToRgb(color));
    }

    /**
     * color system conversion based on thread
     * https://stackoverflow.com/a/17243070
     */
    public static rgbToHsv(color: Color): ColorHsv {
        const { r, g, b } = color;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const d = max - min;
        let h;
        const s = (max === 0 ? 0 : d / max);
        const v = max / 255;
    
        switch (max) {
            case min: h = 0; break;
            case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
            case g: h = (b - r) + d * 2; h /= 6 * d; break;
            case b: h = (r - g) + d * 4; h /= 6 * d; break;
        }
    
        return { h, s, v };
    }
}
