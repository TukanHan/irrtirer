import { SentenceToWordPipe } from './sentence-to-word.pipe';

describe('SentenceToWordPipe', () => {
    it('create an instance', () => {
        const pipe = new SentenceToWordPipe();
        expect(pipe).toBeTruthy();
    });

    it('should return splitted array #1', () => {
        const pipe = new SentenceToWordPipe();
        expect(pipe.transform('It was me')).toEqual(['It', 'was', 'me']);
    });

    it('should return splitted array #2', () => {
        const pipe = new SentenceToWordPipe();
        expect(pipe.transform('')).toEqual([]);
    });

    it('should return splitted array #3', () => {
        const pipe = new SentenceToWordPipe();
        expect(pipe.transform(null)).toEqual([]);
    });
});
