import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(el: ElementRef) {
    console.log('自定义指令');
    setInterval(() => {
      // 获取当前的显示方式
      let v = el.nativeElement.style.visibility;
      console.log(v);
      // 修改当前的显示方式
      v = (v === 'hidden' ? 'visible' : 'hidden');
      el.nativeElement.style.visibility = v;
    }, 1000);
  }

}
