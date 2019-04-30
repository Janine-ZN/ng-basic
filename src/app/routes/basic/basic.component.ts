import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  imgUrl: any = 'assets/imgs/yichan05.jpg';
  changeImg() {
    const num: any = Math.floor(Math.random() * 5 + 1);
    console.log('num===>', num);
    this.imgUrl = 'assets/imgs/yichan0' + num + '.jpg';
  }

  constructor() { }

  ngOnInit() {
  }

}
