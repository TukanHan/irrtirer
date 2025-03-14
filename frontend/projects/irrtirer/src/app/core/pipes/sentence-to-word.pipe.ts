import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sentenceToWord',
})
export class SentenceToWordPipe implements PipeTransform {
    public transform(value: string): string[] {
        if(!value) {
            return [];
        }
        
        return value.split(' ');
    }
}