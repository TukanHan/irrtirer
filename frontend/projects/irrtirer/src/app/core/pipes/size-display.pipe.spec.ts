import { describe, expect, it } from 'vitest';
import { SizeDisplayPipe } from './size-display.pipe';

describe('SizeDisplayPipe', () => {
    it('create an instance', () => {
        const pipe = new SizeDisplayPipe();
        expect(pipe).toBeTruthy();
    });

    it('should return empty string', () => {
        const pipe = new SizeDisplayPipe();
        expect(pipe.transform(null)).toEqual('0 x 0');
    });

    it('should return result in cm unit', () => {
        const pipe = new SizeDisplayPipe();
        expect(pipe.transform({ width: 3.25, height: 1.00 })).toEqual('3.25 x 1.00 cm');
    });

    it('should return result in m unit', () => {
        const pipe = new SizeDisplayPipe();
        expect(pipe.transform({ width: 325.1, height: 10.00 })).toEqual('3.25 x 0.10 m');
    });
});
