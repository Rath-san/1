import { Injectable } from '@angular/core';
import { ToDo } from '../_models/todo';
import { Subject } from 'rxjs/Subject';
// import { Http } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SearchService } from './search.service';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';


@Injectable()
export class MainService {

  headers: HttpHeaders;

  api = environment.api;
  apiRoot = this.api + 'api/todo/';

  paginationOptions;

  pageOffset = 0;

  entriesPerPage = 0;

  toDos = [];
  toDos$ = new Subject();

  constructor(
    private _http: HttpClient,
    private _searchService: SearchService,
    private _authServie: AuthenticationService,
  ) {
  }

  clearToDos() {
    const clearedToDo = this.toDos.filter((x: ToDo) => {
      if (x.completed) {
        this.removeEntry(x.id);
      }
    });
  }

  constructHeaders(): HttpHeaders {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'JWT ' + this._authServie.token);
    return headers;
  }

  getData() {
    this.headers = this.constructHeaders();

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
      .get(`${this.api}api/todo/`, { params, headers: this.headers })
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
    return this._http.delete(`${this.apiRoot}${pk}/delete/`, { headers: this.headers })
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
    return this._http.post(`${this.apiRoot}create/`, body, { headers: this.headers })
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
    return this._http.put(`${this.apiRoot}${pk}/edit/`, body, { headers: this.headers })
      .subscribe((data: any) => {
        // this.getData();
        this.updateEntry(data);
        // console.log(data);
      },
        err => console.log(err)
      );
  }

  updateEntry(entry: any) {
    this.toDos.filter((x: ToDo) => {
      if (x.id === entry.pk) {
        x.completed = entry.completed;
      }
    });
    this.toDos$.next(this.toDos);
  }
}
