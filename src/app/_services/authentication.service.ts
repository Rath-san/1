import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';

@Injectable()
export class AuthenticationService {
  public token;

  api = 'https://todomachineapi.herokuapp.com/';

  constructor(
    private _http: HttpClient
  ) {
    const currentUser = JSON.parse(localStorage.getItem('todoMachine.user'));
    this.token = currentUser && currentUser.token;
  }
  // : Observable<boolean>
  login(username: string, password: string) {
    return this._http.post(`${this.api}api-token-auth/`, { username: username, password: password })
      .map((r: any) => {
        const token = r;
        if (token) {
          this.token = token;
          localStorage.setItem(`todoMachine.user`, JSON.stringify({ username: username, token: token.token }));
          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem(`todoMachine.user`);
  }
}
