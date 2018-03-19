import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../_services/main.service';
import { ToDo } from '../../_models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo;

  constructor(
    private _mainService: MainService
  ) { }

  ngOnInit() {
  }

  removeTodo(id: number) {
    this._mainService.removeEntry(id);
  }

  editTodo(content: string, pk: number, completed: boolean) {
    console.log('edit mode');
    this._mainService.editEntry(content, pk, completed);
  }

  log(m) {
    console.log(m);
  }

}
