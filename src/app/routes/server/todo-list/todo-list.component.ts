import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  list = [];
  constructor(
    private todoService: TodoService
  ) {
    this.list = this.todoService.list;
  }
  deleteItem(i) {
    this.todoService.delete(i);
  }
  ngOnInit() {
  }

}
