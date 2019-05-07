import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Global } from 'src/app/shared/global';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  private userInput = '';
  childrenText = '';
  @Input() toChildren = null;
  @Output() toFather = new EventEmitter();
  doClick() {
    console.log('执行doClick');
    this.toFather.emit(this.userInput);
  }

  constructor() { }

  ngOnInit() {
    this.childrenText = Global.TEST;
  }

}
