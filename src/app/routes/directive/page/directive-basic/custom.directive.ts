import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(el: ElementRef) {
    console.log('自定义指令');
    setInterval(() => {
      if (!el.nativeElement.style.visibility) {
        el.nativeElement.style.visibility = 'hidden';
      } else {
        el.nativeElement.style.visibility = 'visible';
      }
    }, 1000);
  }

}
