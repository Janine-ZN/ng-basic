import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  // 同步
  getData() {
    return 'this is service data';
  }

  getCallbackData() {
    setTimeout(() => {
      const username = '张三';
      return username;
    }, 1000);
  }
}
