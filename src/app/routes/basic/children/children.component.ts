import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  private userInput = '';
  @Input() toChildren = null;
  @Output() toFather = new EventEmitter();
  doClick() {
    console.log('执行doClick');
    this.toFather.emit(this.userInput);
  }

  constructor() { }

  ngOnInit() {
  }

}
