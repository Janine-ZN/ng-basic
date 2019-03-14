import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-template-validation',
  templateUrl: './from-template-validation.component.html',
  styleUrls: ['./from-template-validation.component.scss']
})
export class FromTemplateValidationComponent implements OnInit {
  username = 'semlinker';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.dir(value);
  }

}
