import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  text = '我从爸爸那里来';
  data = '';
  imgUrl: any = 'assets/imgs/yichan05.jpg';
  num = 12.5;
  emp = {
    ename: 'lilei',
    gender: 1,
    salary: 10000,
    birthdate: 1501234567890,
    projectList: ['项目1', '项目2', '项目3'],
  };
  showInfo() {
    console.log('调用了showInfo()');
    return '123';
  }
  changeImg() {
    const num: any = Math.floor(Math.random() * 5 + 1);
    console.log('num===>', num);
    this.imgUrl = 'assets/imgs/yichan0' + num + '.jpg';
  }
  getData(data) {
    this.data = data;
    console.log('我是从父组件传来的data', data);
  }
  constructor() { }

  ngOnInit() {
  }

}
