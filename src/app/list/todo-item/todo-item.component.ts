import { Component, OnInit, Input, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { MainService } from '../../_services/main.service';
import { ToDo } from '../../_models/todo';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  animations: [
    trigger('paning', [
      state('panCenter', style({
        transform: `none`
      })),
      state('panLeft', style({
        transform: `translateX(-200%)`
      })),
      state('panRight', style({
        transform: `translateX(100%)`
      })),
      transition('*=>*', animate('200ms ease-in')),
      // transition('enter=>*', animate('200ms ease-in'))
    ])
  ]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo;

  contentPosition;
  // buttons animations
  opacityNegative = 0;
  opacityPositive = 0;

  contentAnimationState;

  @HostBinding('class.completed')
  get completed() {
    return this.todo.completed;
  }

  @HostBinding('class.edit')
  get edit() {
    return this.todo.edit;
  }

  @ViewChild('editInput') editInput: ElementRef;

  @ViewChild('contentWrapper') contentWrapper: ElementRef;

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

  panCenter() {
    this.contentAnimationState = 'panCenter';
  }

  panLeft() {
    this.contentAnimationState = 'panLeft';
  }

  panRight() {
    this.contentAnimationState = 'panRight';
  }

  resetPan() {
    this.contentAnimationState = '';
  }

  panEnd(m) {
    this.panCenter();
    // this.contentPosition = `translateX(0%)`;
    this.opacityNegative = 0;
    this.opacityPositive = 0;
    if (!this.todo.edit) {
      // to left
      if (m.deltaX < 0) {
        if (m.deltaX < -100) {
          console.log(2);
          
          this.panLeft();
          this.editTodo(this.editInput.nativeElement.value, this.todo.id, !this.todo.completed);
        }

        // to right
      } else if (m.deltaX > 0) {
        if (m.deltaX > 100) {
          this.panRight();
          this.removeTodo(this.todo.id);
        }
      }
    }
  }

}
