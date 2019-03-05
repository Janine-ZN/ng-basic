import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  // 同步方法
  getData() {
    return 'this is service data';
  }

  /**
  * 异步方法
  * 在调用 getCallbackData() 的时候传过来一个 cb 函数
  */
  getCallbackData(cb) {
    setTimeout(() => {
      const username = '张三';
      // return username;   // undefined
      // 执行cb方法
      cb(username);

    }, 1000);
  }

  // ES6 -- Promise
  getPromiseData() {
    return new Promise((resovle) => {
      setTimeout(() => {
        const username = '张三--promise';
        resovle(username);
      }, 1500);
    });
  }

  // rxjs 的观察者模式
  getRxjsData() {
    return new Observable((observer) => {
      setTimeout(() => {
        const username = '张三-observe';
        observer.next(username);
      }, 2000);
    });
  }

}
