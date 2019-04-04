import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-basic',
  templateUrl: './directive-basic.component.html',
  styleUrls: ['./directive-basic.component.scss']
})
export class DirectiveBasicComponent implements OnInit {
  private title: String = '我是一个div';
  private msg = '<h1>我是innerHTML</h1>';
  constructor() { }

  ngOnInit() {
  }

}
