import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MainService } from '../../_services/main.service';
import { SearchService } from '../../_services/search.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('open', style({
        opacity: 1,
        transform: 'translateY(0)',
        height: '*',
        margin: '*'
      })),
      state('close', style({
        opacity: 0,
        transform: 'translateY(100%)',
        height: 0,
        margin: 0
      })),
      transition('*=>*', animate('250ms ease-in-out'))
    ]),
    trigger('switch', [
      state('open', style({
        transform: 'rotate(180deg)'
      })),
      state('close', style({
        transform: 'rotate(45deg)'
      })),
      transition('*=>*', animate('250ms ease-in-out'))
    ])
  ]
})
export class FormComponent implements OnInit {

  @ViewChild('content') contentInput: ElementRef;


  openForm = false;
  animState = 'close';

  display = 'none';

  inputFocus;

  @HostListener('document:click', ['$event'])
  onClickOutside(e) {
    const contains = this._elRef.nativeElement.contains(e.target);
    if (!contains) {
      this.animState = 'close';
      this.openForm = false;
    }
  }

  constructor(
    private _mainService: MainService,
    private _elRef: ElementRef
  ) { }

  ngOnInit() {
  }

  addOnEnter(event, content: string) {
    if (event.keyCode === 13) {
      this.createTodo(content);
    }
  }

  showButton(n) {
    this.inputFocus = `${n}%`;
  }

  createTodo(content: string) {
    this._mainService.postEntry(content);
    this.clearInput();
  }

  clearInput() {
    this.contentInput.nativeElement.value = '';
  }

  toggleForm() {
    this.openForm = !this.openForm;
    this.changeState();
  }

  changeState() {
    this.animState = this.openForm ? 'open' : 'close';
  }

}
