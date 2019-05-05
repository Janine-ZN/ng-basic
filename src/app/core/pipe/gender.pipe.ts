import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, lang?: any): any {
    if (lang === 'zh') {
      if (value === 1) {
        return '男';
      } else {
        return '女';
      }

    } else if (lang === 'en') {
      if (value === 1) {
        return 'male';
      } else {
        return 'female';
      }
    }
  }

}
