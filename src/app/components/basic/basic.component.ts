import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  order = 2;
  flag = false;
  list = [1, 2, 3, 4, 5, 6];
  public attr: any = 'skyblue';
  public today: any = new Date();
  constructor() { }

  ngOnInit() {
    console.log(this.today);
  }

}
