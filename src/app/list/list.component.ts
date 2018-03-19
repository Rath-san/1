import { Component, OnInit } from '@angular/core';
import { MainService } from '../_services/main.service';
import { ToDo } from '../_models/todo';
import { SearchService } from '../_services/search.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  toDosList: ToDo[];
  toDosListLength;

  searchField: FormControl;

  entriesPerPageOptions = [
    { value: 5 },
    { value: 10 },
    { value: 20 },
    { value: 40 },
  ];

  constructor(
    private _mainService: MainService,
    private _searchService: SearchService
  ) { }

  ngOnInit() {
    this._mainService.getData();
    this.getData();

    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(query => {
        this._searchService.query = query;
        this._mainService.getData();
      });
  }

  clearCompleted() {
    this._mainService.clearToDos();
    this.getData();
  }

  getData() {
    this._mainService.toDos$.subscribe((data: ToDo[]) => {
      this.toDosList = data;
      this.toDosListLength = data.length;
    });
  }

  ItemsPerPage(entriesPerPage: number) {
    this._mainService.entriesPerPage = entriesPerPage;
    this._mainService.getData();
  }
}
