import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/service/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  item = '';
  constructor(
    private todoService: TodoService
  ) { }
  addItem() {
    this.todoService.add(this.item);
  }
  ngOnInit() {
  }

}
