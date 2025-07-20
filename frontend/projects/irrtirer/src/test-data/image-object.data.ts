import { ImageObject } from "../app/shared/canvas-objects/image-object";

export const imageObjectMock: ImageObject = {
    size: { width: 100, height: 100 },
    setVisibility: jest.fn(),
} as unknown as ImageObject;
