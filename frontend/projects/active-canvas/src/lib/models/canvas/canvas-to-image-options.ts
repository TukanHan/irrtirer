export interface CanvasToImageOptions {
    /** Optional scale factor for the output image. Default is 1 (original size). */
    scaleFactor?: number;
    /** Optional background color for the output image. If not provided, the background will be transparent. */
    backgroundColor?: string;
}