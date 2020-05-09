import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  @memo()
  public transform(array: Array<string>, args: string): Array<string> {
    array = array || [];
    array.sort((a: any, b: any) => {
      if (a[args] > b[args]) {
        return -1;
      } else if (a[args] <= b[args]) {
        return 1;
      }
    });
    return array;
  }

}
