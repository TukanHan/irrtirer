export interface Color {
    r: number;
    g: number;
    b: number;
    a?: number;
}

export const Black: Color = {r: 0, g:0, b: 0};

export interface ColorHsv {
    h: number;
    s: number;
    v: number;
}