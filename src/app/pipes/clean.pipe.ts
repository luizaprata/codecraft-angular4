import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'clean'
})
export class CleanPipe implements PipeTransform {

    transform(text: string, badWords: string): string {
        let arr: string[] = badWords.split(',');
        let rg;
        for (let word of arr) {
            rg = new RegExp(word, 'gi');
            text = text.replace(rg,'$%#@!');
        }
        return text;
    }

}
