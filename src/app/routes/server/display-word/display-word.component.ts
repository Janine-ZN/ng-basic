import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-word',
  templateUrl: './display-word.component.html',
  styleUrls: ['./display-word.component.scss']
})
export class DisplayWordComponent implements OnInit {
  list = [];
  constructor() { }

  ngOnInit() {
  }

}
