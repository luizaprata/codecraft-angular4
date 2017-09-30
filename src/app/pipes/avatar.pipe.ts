import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

    transform(value: string): any {
        let img = value || 'assets/image/user-default.png';
        return img;
    }

}
