import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberLoop'
})
export class NumberLoopPipe implements PipeTransform {

  transform(value: any): number[] {
    let collection: number[] = [];
    for(let i = 0; i<value; i++) {
      collection.push(i);
    }
    return collection;
  }

}
