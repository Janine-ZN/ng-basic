import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-template-validation',
  templateUrl: './from-template-validation.component.html',
  styleUrls: ['./from-template-validation.component.scss']
})
export class FromTemplateValidationComponent implements OnInit {
  username = 'semlinker';
  // versions = ['1.x', '2.x', '3.x'];
  versions = ['', '1.x', '2.x', '4.x', '6.x'];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.dir(value);
  }

}
