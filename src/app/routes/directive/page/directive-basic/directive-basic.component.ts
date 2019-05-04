import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-basic',
  templateUrl: './directive-basic.component.html',
  styleUrls: ['./directive-basic.component.scss']
})
export class DirectiveBasicComponent implements OnInit {
  private title: String = '我是一个div';
  private msg = '<h1>我是innerHTML</h1>';
  isShow = true;
  status = 3;
  scores = [89, 91, 71];
  elist = [
    { eid: 101, ename: 'dingding', gender: 1 },
    { eid: 102, ename: 'tuangtuang', gender: 0 },
    { eid: 103, ename: 'biangbiang', gender: 1 },
  ];
  pList = [
    { pid: 101, title: '戴尔燃7000', price: 8000, count: 1, pic: 'assets/imgs/yichan01.jpg' },
    { pid: 102, title: '戴尔燃8000', price: 10000, count: 10, pic: 'assets/imgs/yichan02.jpg' },
    { pid: 103, title: '戴尔燃9000', price: 7000, count: 15, pic: 'assets/imgs/yichan03.jpg' },
  ];
  addScore() {
    const num = Math.floor(Math.random() * 100);
    this.scores.push(num);
  }

  delete(index) {
    this.elist.splice(index, 1);
  }

  dese(i) {
    this.pList[i].count--;
  }
  inc(i) {
    this.pList[i].count++;
  }

  deleteProduce(index) {
    this.pList.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
