
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'range'
})
export class RangePipe implements PipeTransform {

    transform(value: string[], start: number, end: number) {
        return value.slice(start, end);
    }

}