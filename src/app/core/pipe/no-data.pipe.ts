import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noData'
})
export class NoDataPipe implements PipeTransform {

  /* transform(size: number, extension: string = 'MB'): any {
    return (size / (1024 * 1024)).toFixed(2) + extension;
  } */
  transform(data: any): any {
    if (data) {
      return data;
    }
    return '暂无数据';
  }

}
