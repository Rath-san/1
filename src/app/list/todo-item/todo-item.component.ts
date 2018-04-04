import { Component, OnInit, Input, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { MainService } from '../../_services/main.service';
import { ToDo } from '../../_models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo;

  contentPosition;
  // buttons animations
  opacityNegative = 0;
  opacityPositive = 0;

  @HostBinding('class.completed')
  get completed() {
    return this.todo.completed;
  }

  @HostBinding('class.edit')
  get edit() {
    return this.todo.edit;
  }

  @ViewChild('editInput') editInput: ElementRef;

  @ViewChild('contentWrapper') contentWrapper;

  constructor(
    private _mainService: MainService
  ) { }

  ngOnInit() {
  }

  removeTodo(id: number) {
    this._mainService.removeEntry(id);
  }

  editTodo(content: string, pk: number, completed: boolean) {
    this._mainService.editEntry(content, pk, completed);
  }

  // toCompleted(m) {
  //   console.log(m);
  // }

  widthChange(m) {
    if (!this.todo.edit) {
      if (m.deltaX < 100 && m.deltaX > -100) {
        this.contentPosition = `translateX(${m.deltaX / 3}%)`;
        if (m.deltaX > 0) {
          this.opacityPositive = m.deltaX / 100;
        } else {
          this.opacityNegative = m.deltaX / -100;

        }
      }
    }
  }

  panEnd(m) {
    this.contentPosition = `translateX(0%)`;
    this.opacityNegative = 0;
    this.opacityPositive = 0;
    if (!this.todo.edit) {
      // to left
      if (m.deltaX < 0) {
        if (m.deltaX < -100) {
          this.editTodo(this.editInput.nativeElement.value, this.todo.id, !this.todo.completed);
        }

        // to right
      } else if (m.deltaX > 0) {
        if (m.deltaX > 100) {
          this.removeTodo(this.todo.id);
        }
      }
    }
  }

}
