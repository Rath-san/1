import { Component, OnInit } from '@angular/core';
import { MainService } from '../../_services/main.service';
import { SearchService } from '../../_services/search.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private _mainService: MainService
  ) { }

  ngOnInit() {
  }

  addOnEnter(event, content: string) {
    if (event.keyCode === 13) {
      this.createTodo(content);
    }
  }

  createTodo(content: string) {
    this._mainService.postEntry(content);
  }



}
