import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
public peopleInfo: any = {
  username: 'Janine',
  gender: '1',  // 默认为 1
  cities: ['北京', '合肥', '宿州'],
  city: '合肥',
  hobby: [
    {
      title: '睡觉',
      checked: false
    },
    {
      title: '吃饭',
      checked: false
    },
    {
      title: '敲代码',
      checked: true
    },
    {
      title: '喝牛奶',
      checked: false
    }
  ],
  mark: ''
};


  constructor() { }

  ngOnInit() {
  }

}
