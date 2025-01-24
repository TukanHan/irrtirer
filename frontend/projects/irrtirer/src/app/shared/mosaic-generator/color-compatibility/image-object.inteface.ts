import { Vector } from "../../../core/models/vector.model";
import { BluredImageObject } from "./blured-image-object.model";

export interface ImageObject {
    getBluredImage(worldRadial: number, polygon: Vector[]): BluredImageObject;
}