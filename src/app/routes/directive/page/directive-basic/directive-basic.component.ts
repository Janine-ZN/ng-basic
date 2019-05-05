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
  gender = 1;
  addScore() {
    const num = Math.floor(Math.random() * 100);
    this.scores.push(num);
  }

  delete(index) {
    this.elist.splice(index, 1);
  }


  constructor() { }

  ngOnInit() {
  }

}
