import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  list = ['吃饭', '睡觉', '打豆豆'];
  add(item) {
    this.list.push(item);
    console.log(this.list);
  }
  delete(i) {
    console.log('删除的是第几个', i);
    this.list.splice(i, 1);
  }

  constructor() { }
}
