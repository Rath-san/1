import { Injectable } from '@angular/core';
import { ToDo } from '../_models/todo';
import { Subject } from 'rxjs/Subject';
// import { Http } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SearchService } from './search.service';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class MainService {

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'JWT ' + (this._authServie.token.token));

  api = 'https://todomachineapi.herokuapp.com/';
  // apiRoot = 'api/todo/';

  paginationOptions;

  pageOffset = 0;

  entriesPerPage = 0;

  toDos = [];
  toDos$ = new Subject();

  constructor(
    private _http: HttpClient,
    private _searchService: SearchService,
    private _authServie: AuthenticationService,
  ) { }

  clearToDos() {
    const clearedToDo = this.toDos.filter((x: ToDo) => {
      if (x.completed) {
        this.removeEntry(x.id);
      }
    });
    // this.getData();
  }

  getData() {
    const headers = this.headers;
    let params = new HttpParams();

    if (this._searchService.query) {
      params = params.append('q', this._searchService.query);
    }

    if (this.entriesPerPage) {
      params = params.append('limit', this.entriesPerPage.toString());
    }

    if (this.pageOffset) {
      params = params.append('offset', this.pageOffset.toString());
    }

    this._http
      .get(`${this.api}api/todo/`, { params, headers })
      .map((obj: any) => {
        if (this.entriesPerPage) {
          return obj.results.map(el => new ToDo(el.pk, el.content, el.completed));
        } else {
          return obj.map(el => new ToDo(el.pk, el.content, el.completed));
        }
      })
      .subscribe(
        data => {
          this.toDos = data;
          this.toDos$.next(this.toDos);
        },
        err => {
          console.log(err);
        }
      );
  }

  removeEntry(pk: number) {
    return this._http.delete(`${this.api}api/todo/${pk}/delete/`, { headers: this.headers })
      .subscribe(
        result => {
          this.getData();
        },
        err => console.error(err)
      );
  }

  postEntry(content: string) {
    const body = {
      content: content
    };
    return this._http.post(`${this.api}api/todo/create/`, body, { headers: this.headers })
      .subscribe((data: any) => {
        this.getData();
      },
        err => console.log(err)
      );
  }

  editEntry(content: string, pk: number, completed: boolean) {
    const body = {
      content: content,
      completed: completed
    };
    return this._http.put(`${this.api}api/todo/${pk}/edit/`, body, { headers: this.headers })
      .subscribe((data: any) => {
        this.getData();
      },
        err => console.log(err)
      );
  }
}
