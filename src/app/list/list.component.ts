import { Component, OnInit } from '@angular/core';
import { MainService } from '../_services/main.service';
import { ToDo } from '../_models/todo';
import { SearchService } from '../_services/search.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { AuthenticationService } from '../_services/authentication.service';
import { list, item, itemOut } from '../_animations/animations';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [list, item, itemOut]

})
export class ListComponent implements OnInit {

  toDosList: ToDo[];
  toDosListCompleted: ToDo[];
  toDosListLength = 0;
  toDosListCompletedLength = 0;

  searchField: FormControl;

  entriesPerPageOptions = [
    { value: 5 },
    { value: 10 },
    { value: 20 },
    { value: 40 },
  ];

  constructor(
    private _mainService: MainService,
    private _searchService: SearchService,
    private _authService: AuthenticationService
  ) { }

  ngOnInit() {
    this._mainService.getData();
    this.getData();

    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(querySearch => {
        this._searchService.query = querySearch;
        this._mainService.getData();
      });
  }

  // clearCompleted() {
  //   this._mainService.clearToDos();
  //   this.getData();
  // }

  getData() {
    this._mainService.toDos$.subscribe((data: ToDo[]) => {

      const progress = data.filter((d: ToDo) => !d.completed);
      const completed = data.filter((d: ToDo) => d.completed);

      this.toDosList = progress;
      this.toDosListCompleted = completed;

      this.toDosListLength = progress.length;
      this.toDosListCompletedLength = completed.length;

    });
  }

  ItemsPerPage(entriesPerPage: number) {
    this._mainService.entriesPerPage = entriesPerPage;
    this._mainService.getData();
  }

  trackTodo = (index, itm) => {
    // console.log(itm.id);
    return itm.id;
  }
}
